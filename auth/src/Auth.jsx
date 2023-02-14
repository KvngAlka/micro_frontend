import React, { useState } from 'react'
import './styles/auth.css'

const Auth = () => {
  const [state, setState] = useState({email : '', password : ''})
  return (
    <div className='auth'>
      <div>
        <input value={state.email} onChange = {(e)=> setState({...state, email : e.target.value})} name='email' type="text" placeholder='email' />
        <input value={state.password} onChange = {(e)=> setState({...state, password : e.target.value})} type="password" name='password' placeholder='password' />
        <button>
            submit
        </button>
      </div>
    </div>
  )
}

export default Auth