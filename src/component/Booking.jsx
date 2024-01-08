import React from 'react'

const Form = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4 '>
      <form action="" className='lg:flex lg:justify-between w-full items-center'>
        <div className='flex flex-col my-2 py-2 '>
          <label htmlFor="">Destination</label>
          <select name="" id="" className='bg-gray-300 lg:w-[300px] md:w-full border rounded-md p-2'>
            <option value="">Kathmandu</option>
            <option value="">Pokahara</option>
            <option value="">Sagarmatha</option>
            <option value="">Annapurna</option>
          </select>
        </div>
        <div className='flex justify-evenly  w-full '>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label htmlFor="">Check-In</label>
            <input  className='border rounded-md p-2' type="date" />
          </div>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label htmlFor="" >Check-Out</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
        </div>
        <div className='flex flex-col items-center'>
        <label htmlFor="">Search</label>
        <button className='rounded-lg'>Rates & Availabities</button>
        </div>
      </form>
    </div>
  )
}

export default Form