import React, { useEffect, useRef } from 'react'
import stoney from '../assets/stoney.png'
import duney from '../assets/duny.png'
import flowery from '../assets/flowery.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Colors = () => {
    useEffect(() => {
        const tl = gsap.timeline()

        tl.to('.section-left', {left: 0})
        .to('.section-right', {right: 0})
        ScrollTrigger.create({
            trigger: ".parent-container",
            start: "top top",
            end: "200px",
            markers: true,
            pin: true,
            animation: tl,
            scrub: 1,
            anticipatePin: true,
            pinSpacer: false
        })
        return() => {
            tl.kill()
        }
    },[])
   
  return (
    <div className='w-screen h-screen relative parent-container'>
        <div className='w-full h-full flex justify-center items-center absolute top-0'>
            <h1 className='absolute secondary-font text-white text-4xl'>Colors inspired by nature</h1>
            <img src={stoney} alt="stoney" className='object-cover' />
        </div>
        <div className='w-full h-full flex justify-center items-center absolute top-0 section-left '>
            <h1 className='absolute secondary-font text-white text-4xl'>Colors inspired by the environment</h1>
            <img src={duney} alt="stoney" className='object-cover' />
        </div>
        <div className='w-full h-full flex justify-center items-center absolute top-0 section-right'>
            <h1 className='absolute secondary-font text-white text-4xl'>Beauty in your fingertips</h1>
            <img src={flowery} alt="stoney" className='object-cover' />
        </div>
    </div>
  )
}

export default Colors