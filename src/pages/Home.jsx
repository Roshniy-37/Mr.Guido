import React from 'react'

function Home() {
  return (
    <div className='flex h-full'>
        <div className=' border w-1/2 h-full'>left</div>
        <div className=' border w-1/2 h-full flex justify-center items-center'>
            <img src="/robot.svg" alt="" className=' h-4/5 '/>
        </div>
    </div>
  )
}

export default Home
