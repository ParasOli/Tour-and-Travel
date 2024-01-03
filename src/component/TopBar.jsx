import React from 'react'
import { IoChatbox  } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";





const TopBar = () => {
  return (
   <div className='flex justify-between items-center px-4 py-2'>
    <div className='flex items-center'>
        <IoChatbox size={30} className='mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
    </div>

    <div className='flex'>
      <div className='hidden md:flex items-center px-6'>
        <FaClock size={20} className='mr-2 text-[var(--primary-dark)]'/>
        <h1 className='text-sm text-gray-800'>9AM-5AM</h1>
        </div>
       <div className='hidden md:flex items-center px-6' >
        <FaPhoneAlt size={20} className='mr-2 text-[var(primary-dark)]' />
        <h1 className='text-sm text-gray-800 '>9868757379</h1>
       </div>

        <button className='bg-slate-'>Get a Free Quote</button>
    </div>
   </div>
    
  )
}

export default TopBar