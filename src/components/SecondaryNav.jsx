import React from 'react'
import logo from "../assets/gnb-desktop-120x32.svg"
import { firstNavLeft, secondNav } from '../utils'

const SecondaryNav = () => {
  return (
   <nav className='flex bg-white w-screen h-18 items-center px-12 justify-between'>
    <div className='flex justify-between items-center gap-8'>
     <img src={logo} alt="logo"  />
        <div className='flex gap-2 '>
            <ul className='flex gap-6'>
                {firstNavLeft.map((index, item) => (
                    <li key={item}><a href={index.path} className='text-black secondary-font text-xl'>{index.name}</a></li>
                ))}
                
            </ul>
        </div>
    </div>
    <div className='flex justify-between items-start gap-8'>
        <ul className='flex gap-6
        '>
            {secondNav.map((item, index) => (
                <li key={index} className='text-black secondary-font text-xl'>{item.name}</li>
            )
            )}
        </ul>
    </div>

   </nav>
  )
}

export default SecondaryNav
