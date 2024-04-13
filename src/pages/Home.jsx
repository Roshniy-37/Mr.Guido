import React from 'react'

function Home() {
  return (
    <div className='flex h-full'>
        <div className='pl-20 w-1/2 h-full'>
            <h1 className='text-[20vh] font-extrabold text-white '>Mr.</h1>
            <img src="/heading.png" alt="" className=' h-2/5 '/>
            <h2 className='text-[5vh] font-semibold text-blue-800'>Hello! This is your Virtual Guide</h2>
        </div>
        <div className=' w-1/2 h-full flex justify-center items-center'>
            <img src="/robot.svg" alt="" className=' h-4/5 '/>
        </div>
    </div>
  )
}

export default Home
