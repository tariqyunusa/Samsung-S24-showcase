import { useEffect } from 'react'
import './App.css'
import SecondaryNav from './components/SecondaryNav'
import PrimaryNav from './components/PrimaryNav'
import Hero from './components/Hero'
import Display from './components/Display'

import Camera from './components/Camera'
import Colors from './components/Colors'
import Carousel from './components/Carousel'
import Pixels from './components/Pixels'
import Footer from './components/Footer'

import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import gsap from 'gsap'

function App() {
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
},[])
  

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
   <div className='h-screen w-screen relative top-48'>
   <Carousel />
   </div>
  <div className='h-screen w-screen relative  top-48'>
    <Pixels />
  </div>
  <div className='h-screen w-screen relative top-48'>
  <Footer />
  </div>
  
    </div>
  )
}

export default App
