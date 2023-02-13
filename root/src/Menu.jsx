import React from 'react'
import {useNavigate} from 'react-router-dom'



const Card = ({name})=>{
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`${name}`.toLowerCase())} style={{width : '100%', padding : '20px', backgroundColor : 'black',color : 'white', borderRadius : '15px',cursor : 'pointer'}}>
            {name}
        </div>
    )
}

const Menu = () => {
  return (
    <div style={{display : 'grid', gap : '20px', gridTemplateColumns : '1fr 1fr 1fr'}}>
        <Card name={"Home"} />
        <Card name={"About"} />
        <Card name={"Auth"} />

    </div>
  )
}

export default Menu