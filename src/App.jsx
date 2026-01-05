import React from 'react'
import SeventyEightUE from './lectures/SeventyEightUE'
import SeventyNineRouter from './lectures/SeventyNineRouter'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
    {/* <SeventyEightUE/> */}

    <div className=' flex justify-between text-3xl bg-pink-900 px-8 py-4'>
      <h2>Navbar</h2>
      <div className='flex gap-30'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
          <Link to={'/product'}>Product</Link>
        
      
      </div>
    </div>

   <Routes>
 <Route path = "/" element = {<Home/>}/>
  <Route path = "/about" element = {<About/>}/>
   </Routes>
    </div>
  )
}

export default App