import React, { useState } from 'react'
import Image from '../assets/pny.png'
import { header,footer } from './css/header'
import Dropdown from './Dropdown'

function Header() {

   const [show, setShow] = useState(false)

  

  return (
    <div className={header.container} >
      
        <img src={Image} className='w-24' />
      
      <div className={header.search} >
        <i  >Q</i>
        <input type="text" className={header.input} placeholder='search product ...'  />
      </div>
      <div className=' flex justify-between w-80' >
        
        <button onClick={()=>setShow(!show)}  className={`${header.dropdown} relative`} > English <span>v</span> {show &&< Dropdown/>}</button>
        <p className={header.dropdown}><i></i> Favorite</p>
        <p className={header.dropdown}><i></i> Account</p>
      </div>
    </div>
  )
}



export default Header
