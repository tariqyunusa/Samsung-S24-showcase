import React from 'react'
import logo from "../assets/gnb-desktop-120x32.svg"
import { firstNavLeft, secondNav } from '../utils'
import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const SecondaryNav = () => {
  return (
   <nav className='flex bg-white w-screen logo-spacing h-18 items-center px-12 justify-between'>
    <div className='flex justify-between items-center gap-8'>
        <div className='w-24 h-24 flex justify-center items-center'><img src={logo} alt="logo"  /></div>
        <div className='flex gap-2 secondary-nav'>
            <ul className='flex gap-6'>
                {firstNavLeft.map((index, item) => (
                    <li key={item}><a href={index.path} className='text-black secondary-font text-xl'>{index.name}</a></li>
                ))}
                
            </ul>
        </div>
    </div>
    <div className='flex justify-between items-start gap-8 secondary-nav'>
        <ul className='flex gap-6
        '>
            {secondNav.map((item, index) => (
                <li key={index} className='text-black secondary-font text-xl'>{item.name}</li>
            )
            )}
        </ul>
    </div>
    <div className='hidden show-icons'>
        <ul className='flex gap-4'>
        <FiShoppingBag />
        <FiUser />
        </ul>
    </div>

   </nav>
  )
}

export default SecondaryNav
