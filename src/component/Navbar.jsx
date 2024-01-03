import React, { useState } from 'react'
import { FaInstagram, FaGoogle, FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";






const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }
  return (
  <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
    <ul className='hidden sm:flex px-4'>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="#gallery">Gallery</a>
        </li>
        <li>
            <a href="#deals">Deals</a>
        </li>
        <li>
            <a href="#contact">Contacts</a>
        </li>
    </ul>
    <div className='flex justify-between
    '>
  <FaInstagram className='mx-2'/>
  <FaSquareTwitter className='mx-2'/>
  <FaGoogle className='mx-2'/>
  <FaFacebook className='mx-2'/>
    </div>
        <div className='sm:hidden z-10'>
        <IoMenu onClick={handleNav} size={30} className='mr-4 cursor-pointer'/>
        </div>
        <div className={nav? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-7 flex-col': 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8'>
            <a href="/">Home</a>
        </li>
        <li className='text-2xl py-8'>
            <a href="#gallery">Gallery</a>
        </li>
        <li className='text-2xl py-8'>
            <a href="#deals">Deals</a>
        </li>
        <li className='text-2xl py-8'>
            <a href="#contact">Contacts</a>
        </li> 
            </ul>
        </div>
  </div>
  )
}

export default Navbar