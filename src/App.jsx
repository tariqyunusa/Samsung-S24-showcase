import { useState } from 'react'

import './App.css'
import SecondaryNav from './components/SecondaryNav'
import PrimaryNav from './components/PrimaryNav'
import Hero from './components/Hero'

function App() {

  

  return (
    <div className='overflow-x-hidden'>
    <SecondaryNav />
    <PrimaryNav />
    <Hero />
   <div className='h-screen w-screen'></div>
    </div>
  )
}

export default App
