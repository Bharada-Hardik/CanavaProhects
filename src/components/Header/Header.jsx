import React from 'react'
import Navbar from './Navbar';
import Main from './Main';

 const Header = () => {
  return (
   <div className='w-screen h-screen bg-[url(src/assets/bg.png)] bg-no-repeat bg-cover p-8 md:bg-contain lg:bg-cover '>
        <Navbar/>
        <Main/>

   </div>
  )
}

export default Header;