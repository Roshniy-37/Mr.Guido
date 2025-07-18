import './App.css'
import { Routes, Route, Link , useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Search from './pages/Search'
import { useEffect, useState } from 'react'

function App() {
  const [current, setCurrent] = useState('/');


  const path = useLocation()
  console.log(path.pathname)

  useEffect(()=>{
    setCurrent(path.pathname)
  }, [path])

  return (
    <div className='fixed flex flex-col items-center justify-center w-full h-screen back' >
      <div className=' h-[10vh] border w-[98%] absolute top-2 bg-white rounded-lg shadow-lg flex justify-between items-center px-6'>
        <img src="logo.png" alt="" className=' h-[13vh] '/>
        <div className=' w-[500px]  h-full flex justify-between items-center'>
          <Link to="/" className={current==='/'?'border w-32 text-center p-2 px-4 bg-indigo-300 rounded-full text-white ':'w-32 text-center p-2 px-4'}>Home</Link>
          <Link to="/search" className={current==='/search'?'border  w-32 text-center p-2 px-4 bg-indigo-300 rounded-full text-white ':'w-32 text-center p-2 px-4'}>Search</Link>
          <Link to="/contact" className={current==='/contact'?'border  w-32 text-center p-2 px-4 bg-indigo-300 rounded-full text-white ':'w-32 text-center p-2 px-4'}>Contact Us</Link>
        </div>
      </div>
      <div className='  h-[calc(90vh-1em)] w-[98%] mt-[calc(10vh+1em)] rounded-lg backdrop-blur-sm' style={{boxShadow:"0 0 25px -15px black"}}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
