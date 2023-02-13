import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Home = () => {
  return (
    <div  style={{width : '100%',display: 'flex', flexDirection : 'column'}}>
      <Navbar/>
      <div style={{flex : '1', minHeight : '70vh', backgroundColor : 'white'}}>
        <h1 color='black'>Remote Home</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Home