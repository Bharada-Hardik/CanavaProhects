import React from 'react'
// import ListIcon from '../assets/react.svg'

const Navbar = () => {
  return (
    <div className='p-8 flex justify-between '>
     <img src='src/assets/List.png' className='h-8'/>
     <button className='pt-4 pb-4 pl-6 pr-6 bg-[#F84646] text-white text-sm font-bold rounded-sm border-none
'>İletişim</button>
    </div>
  )
}

export default Navbar
