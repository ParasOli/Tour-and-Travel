import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1554710869-95f3df6a3197?q=80&w=1577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mountain" className='w-full h-full object-cover' />
        <div className='max-w=[1140px] m-auto'>
            <div className='absolute top-[40%] max-w-[600px] text-white h-full flex flex-col px-7'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With weekaway</h2>
                <p>Nepal's stunning natural beauty captivates with majestic peaks, lush valleys, and serene landscapes, adorned by cascading waterfalls and diverse flora, a true paradise on Earth.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero