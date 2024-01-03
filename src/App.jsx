import React from 'react'
import TopBar from './component/TopBar'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Activities from './component/Activities'
import Booking from './component/Booking'
import Images from './component/Images'
import Contact from './component/Contact'
import Footer from './component/Footer'




const App = () => {
  return (<>
    <TopBar />
    <Navbar/>
    <Hero/>
    <Activities />
    <Booking/>
    <Images/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App