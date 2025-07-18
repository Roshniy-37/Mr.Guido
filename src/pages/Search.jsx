import { useState } from 'react';
import { motion } from 'framer-motion';

function Search() {
  const [story, setStory] = useState('');
  const [query, setQuery] = useState('');
  const [image, setImage] = useState('');
  const UNSPLASH_KEY = import.meta.env.UNSPLASH_ACCESS_KEY;

  async function fetchData() {
    setStory('Loading...');
    setImage('');

    try {
      const res = await fetch(`https://mr-guido.onrender.com/story?place=${query}`);
      const data = await res.json();
      setStory(data.story || `Error: ${data.error}`);

      const imgRes = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_KEY}`
      );
      const imgData = await imgRes.json();
      if (imgData.results && imgData.results[0]) {
        setImage(imgData.results[0].urls.regular);
      }
    } catch (error) {
      console.error('Error:', error);
      setStory('Failed to load story.');
    }
  }

  function readAloud() {
    const utterance = new SpeechSynthesisUtterance(story);
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="relative flex flex-col items-center justify-start h-screen gap-5 p-8 overflow-y-auto bg-gradient-to-b from-blue-100 to-white">
      <div className="space-x-5">
        <input
          className="p-2 border rounded-xl"
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Enter a tourist place"
        />
        <button
          className="px-3 py-2 text-white bg-indigo-300 hover:bg-indigo-400 rounded-xl"
          onClick={fetchData}
        >
          Search
        </button>
        <button
          onClick={readAloud}
          className="px-4 py-2 text-white bg-green-400 hover:bg-green-500 rounded-xl"
        >
          Read Aloud
        </button>
      </div>

      {image && (
        <img
          src={image}
          alt={query}
          className="object-cover shadow-lg w-96 h-60 rounded-xl"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl p-8 overflow-y-auto bg-blue-200 shadow-xl rounded-xl min-h-48 max-h-96"
      >
        <p className="font-serif text-lg">{story}</p>
      </motion.div>

      {query && (
        <div className="absolute w-64 h-40 overflow-hidden border-2 border-gray-300 shadow-xl bottom-28 right-6 rounded-xl">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            title="Google Map"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Search;
