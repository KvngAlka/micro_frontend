import React from 'react'
import './App.css'

const Auth = () => {
  return (
    <div className='App'>
      <div>
        <input type="text" placeholder='email' />
        <input type="text" placeholder='password' />
        <button>
            submit
        </button>
      </div>
    </div>
  )
}

export default Auth