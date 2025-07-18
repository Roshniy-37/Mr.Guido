import requests
from fastapi import FastAPI, Query
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import google.generativeai as genai 
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.5-pro")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify "https://your-frontend.vercel.app"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class StoryResponse(BaseModel):
    place: str
    story: str

def fetch_wikipedia_summary(place: str) -> Optional[str]:
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{place}"
    response = requests.get(url)

    if response.status_code != 200:
        return None

    data = response.json()
    
    # If it's a disambiguation page or has no extract
    if "extract" not in data or "may refer to:" in data.get("extract", ""):
        return None
    
    return data["extract"]

def generate_gemini_story(place: str, context: str = "") -> str:
    if context:
        prompt = f"""You're a storyteller for travelers. Craft a vivid and engaging historical story for the place '{place}' using the following context:

{context}

Make it feel like a narrated tale, not just plain facts."""
    else:
        prompt = f"""You're a storyteller for travelers. Imagine you're describing the history and essence of a place called '{place}'. 
Even if you don't know exact facts, make it feel like an engaging and vivid story full of imagination and wonder."""

    response = model.generate_content(prompt)
    return response.text.strip()

@app.get("/story", response_model=StoryResponse)
def get_place_story(place: str = Query(..., description="Name of the place")):
    summary = fetch_wikipedia_summary(place)
    
    if summary:
        try:
            story = generate_gemini_story(place, context=summary)
        except Exception as e:
            story = f"Gemini generation failed with Wikipedia context: {str(e)}"
    else:
        try:
            story = generate_gemini_story(place)
        except Exception as e:
            story = f"Gemini generation failed without Wikipedia too: {str(e)}"

    return {"place": place, "story": story}
