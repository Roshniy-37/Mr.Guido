
function Home() {
  return (
    <div className='flex h-full'>
        <div className='w-1/2 h-full pl-20'>
            <h1 className='text-[20vh] font-extrabold text-white '>Mr.</h1>
            <img src="/heading.png" alt="" className=' h-2/5'/>
            <h2 className='text-[5vh] font-semibold text-blue-800'>Hello! <br></br>This is your Virtual Travel Guide</h2>
        </div>
        <div className='flex items-center justify-center w-1/2 h-full '>
            <img src="/robot.svg" alt="" className=' h-4/5'/>
        </div>
    </div>
  )
}

export default Home
