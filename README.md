# Mr. Guido 🌍✨

**Your personal AI storyteller for travelers** — Explore the world's most iconic places through narrated historical tales and immersive visuals!

---

## 🧭 What is Mr. Guido?

Mr. Guido is a delightful travel companion web app that turns any famous place into a vivid historical story. Powered by **Gemini AI**, it crafts rich, engaging travel tales narrated like a human storyteller — not just dry facts! It even fetches real-time images and maps to complete the experience.

---

## 🚀 Features

- 🔍 **Search Any Tourist Destination**  
  Type a place name (e.g., *Rome*, *Agra*, *Kyoto*) and receive a beautifully narrated story crafted by Gemini AI.

- 🖼️ **Dynamic Image Fetching**  
  The app uses the Unsplash API to fetch a matching high-resolution image of the place you searched.

- 🗺️ **Integrated Google Maps View**  
  See the location directly via an interactive Google Map iframe.

- 🔊 **Text-to-Speech Narration**  
  Click "Read Aloud" to have the story narrated using your device's speech synthesis engine.

- 🎨 **Smooth Animations**  
  Enjoy smooth UI transitions thanks to **Framer Motion**.

- 🧠 **Smart Backend (FastAPI + Gemini)**  
  The backend fetches historical summaries and rewrites them into story format using Google’s Gemini model. It tries Wikipedia first and gracefully falls back to Gemini if the data is missing or misleading.

---

## 🛠️ Tech Stack

| Frontend       | Backend           |
|----------------|-------------------|
| React + Vite   | FastAPI (Python)  |
| Tailwind CSS   | Gemini AI         |
| Framer Motion  | Wikipedia API     |
| Unsplash API   | CORS Middleware   |

---

## 📦 How to Run Locally

### 🔹 Frontend

```bash
cd frontend
npm install
npm run dev
