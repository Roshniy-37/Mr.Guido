from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_community.llms import HuggingFaceHub
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

HF_TOKEN = os.getenv("HF_TOKEN")  

REPO_ID = "tiiuae/falcon-7b-instruct"

llm = HuggingFaceHub(
    huggingfacehub_api_token=HF_TOKEN,
    repo_id=REPO_ID,
    verbose=False,
    model_kwargs={"max_new_tokens": 1000}
)

template = """You get a scenario as input, tell it like a story.
Context = {scenario}
Story:"""
prompt = PromptTemplate(template=template, input_variables=["scenario"])
chain = LLMChain(prompt=prompt, llm=llm)

@app.get("/")
def home():
    return {"message": "LangChain story generator backend active"}

@app.get("/search/")
def search(scenario: str):
    try:
        story = chain.run({"scenario": scenario})
        return {"story": story}
    except Exception as e:
        return {"error": str(e)}
