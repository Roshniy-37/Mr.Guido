import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Search() {
    const[story,setStory] =useState('')
    const[query,setQuery] =useState('')
    
    async function fetchData(){
        setStory('Loading...')
        const response= await fetch(`http://0.0.0.0:8000/search/?scenario=${query}`)
        const data=await response.json()
        setStory(data.split('Story:')[1])
    
    }
  return (
    <div className='p-8 gap-5 h-full flex justify-start items-center flex-col' >
      <div className='space-x-5'>
        <input className='p-2 border rounded-xl ' onChange={(e)=>setQuery(e.target.value)} type="text" />
        <button className='border bg-indigo-200 py-2 px-3 rounded-xl' onClick={fetchData}>Search</button>
      </div>
      <div className='w-full bg-blue-300  rounded-xl shadow-xl min-h-48'>
      <div className='p-10'>
        <p>{story}</p>
      </div>
      </div>
      
    </div>
  )
}

export default Search


