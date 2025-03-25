import React from 'react'
import Navbar from './Navbar';
import { Main } from './Main';

const Header = () => {
  return (
   <div className='w-screen h-screen bg-[url(./assets/bg.png)] bg-no-repeat bg-cover '>
    <Navbar></Navbar>
    <Main></Main>

   </div>
  )
}
export default Header;
