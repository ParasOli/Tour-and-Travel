import { info } from 'autoprefixer'
import React, { useState } from 'react'
import { UNSAFE_DataRouterStateContext } from 'react-router-dom'

const Activities = () => {
  const [readmore, setReadmore] = useState(false)
  const info = 'a bs jns adkn asd aksd as dks dks dks dks dkskd sk ksndksndsk dks dks dks dks '
  return (
    <div className='max-w-[1140px] m-auto md:flex mt-[-75px]  '>
        <div  className='relative p-5' >
            <h3 className='absolute text-white z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y[-50%]'>Annapurna</h3> 
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://plus.unsplash.com/premium_photo-1661907101203-ad65f1905049?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmVwYWx8ZW58MHx8MHx8fDA%3D" alt="" />
            <p>{readmore? info: `${info.substring(0,4)}...` }
            <button onClick={()=>{setReadmore(!readmore)}}>{readmore? 'showless': 'showmore'}</button></p>
        </div>
        <div className='relative p-5' >
            <h3 className='absolute text-white z-10 top-[50%]  left-[50%] translate-x-[-50%] translate-y[-50%]'>Annapurna</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'src="https://plus.unsplash.com/premium_photo-1661907101203-ad65f1905049?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmVwYWx8ZW58MHx8MHx8fDA%3D" alt="" />
            <p>{readmore?info: `${info.substring(0,10)}....`}
            <button onClick={()=>{setReadmore(!readmore)}}>{readmore? 'showless':'showmore'}</button></p>
        </div>
        <div className='relative p-5' >
            <h3 className='absolute text-white z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y[-50%]'>Annapurna</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://plus.unsplash.com/premium_photo-1661907101203-ad65f1905049?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmVwYWx8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
    </div>
  )
}

export default Activities