import { useState } from 'react'

import './App.css'
import SecondaryNav from './components/SecondaryNav'
import PrimaryNav from './components/PrimaryNav'
import Hero from './components/Hero'
import Display from './components/Display'
import Camera from './components/Camera'
import Colors from './components/Colors'


function App() {

  

  return (
    <div className=' relative reset-style'>
    <SecondaryNav />
    <PrimaryNav />
    <Hero />
   <Display />
   <Camera />
   
   <div className='h-screen w-screen reset-style'>
    <Colors />
   </div>
    </div>
  )
}

export default App
