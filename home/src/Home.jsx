import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import './styles/home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <div className='hero_s'>

        </div>
        <h1>Remote Home for ACS</h1>
        <div className='hero_s'>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home