import React from 'react'
import { secondNav } from '../utils'

const PrimaryNav = () => {
  return (
   <nav className='w-screen primary-nav  h-18 bg-white flex justify-between items-center px-12 sticky top-0  z-50'>
        <h1 className='secondary-font text-xl'>Galaxy S24 Ultra</h1>
        <div className='flex gap-8 items-center'>
            <ul className='flex gap-6'>
                {secondNav.map((item, index) => (
                    <li key={index} className='primary-font-light text-xl'>{item.name}</li>
                ))}
            </ul>
            <a className='rounded-md bg-primary p-3 primary-font-darker text-xl text-white' href='https://www.samsung.com/us/smartphones/galaxy-s24-ultra/buy/'>Buy Now</a>
        </div>
   </nav>
  )
}

export default PrimaryNav
