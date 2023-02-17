import React from 'react'
import {logo,banner, logo_yellow} from './assets/remote'
const { useState, useEffect }  = React;




const Auth = () => {
  const [state, setState] = useState({email : '', password : ''});
  const [pageLoading, setPageLoading]  = useState(true);

  const submitData = ()=> {
    if(!state.email || !state.password){
      alert('both field required!');
      return;
    }

    localStorage.setItem("data", JSON.stringify(state))
  }

  useEffect(()=>{
    setTimeout(()=> {setPageLoading(false)}, 3000)
  },[])

  if(pageLoading) return <div className='w-screen h-screen grid place-items-center'> <h2>Loading</h2> </div>

  return (
    <div className='h-screen bg-gray-100  flex '>


      <div className='flex-1 grid place-items-center   lg:flex-[0.4] '>
        <div className='flex flex-col w-96 bg-white gap-3  p-5 shadow-lg rounded-xl'>
          <div className='flex flex-col items-center gap-5 mb-3'>
            <div>
              <img src={logo} alt=""  className='w-20 h-auto'/>
            </div>
            <h4 className='font-bold text-gray-800'>MTN Draw App</h4>
          </div>
          <h5 className='text-gray-700 py-2 '>Please login to your account</h5>

          <input className='p-3 border rounded-lg ' value={state.email} onChange = {(e)=> setState({...state, email : e.target.value})} name='email' type="text" placeholder='email' />
          <input className='p-3 border rounded-lg ' value={state.password} onChange = {(e)=> setState({...state, password : e.target.value})} type="password" name='password' placeholder='password' />
          <button onClick={submitData} className='p-3 bg-gray-800 text-white rounded-lg'>
              submit
          </button>
        </div>
      </div>


      <div   className={`flex-[0.6] place-items-center sm:hidden overflow-hidden lg:flex  `}>
        <img src={banner} alt="" className='w- h-full object-cover' />
      </div>
    </div>
  )
}

export default Auth