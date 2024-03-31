import { useState } from 'react'

import './App.css'
import SecondaryNav from './components/SecondaryNav'
import PrimaryNav from './components/PrimaryNav'
import Hero from './components/Hero'
import Display from './components/Display'
import Camera from './components/Camera'

function App() {

  

  return (
    <div className=' relative'>
    <SecondaryNav />
    <PrimaryNav />
    <Hero />
   <Display />
   <Camera />
   <div className='w-screen h-screen'></div>
    </div>
  )
}

export default App
