import React from 'react'

const Contact = () => {
  return (
    <div>
        <p className='text-center  text-gray-700 py-2'>We are standing by</p>
        <div className='grid md:grid-cols-2'>
            <img src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww" alt="/" 
            className='w-[90%] object-cover p-2 md:h-[400px] h-[200px] m-auto'/>

            <form action="">
                <div className='grid grid-cols-2 '>
                    <input className='border m-2 p-2' type="text" placeholder='First'/>
                    <input className='border m-2 p-2' type="text" placeholder='Last' />
                    <input className='border m-2 p-2' type="email" placeholder='Email' />
                    <input  className='border m-2 p-2'type="tel" placeholder='Phone' />
                    <input  className='border col-span-2 m-2 p-2'type="text" placeholder='Address' />
                    <textarea className='border col-span-2 m-2 p-2' name="" id="" cols="30" rows="10"></textarea>
                    <button className=' col-span-2 m-2 '>Submit</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Contact