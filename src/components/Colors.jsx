import React, { useEffect, useRef } from 'react'
import stoney from '../assets/stoney.png'
import duney from '../assets/duny.png'
import flowery from '../assets/flowery.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Colors = () => {
    gsap.registerPlugin(ScrollTrigger)
    const containerRef = useRef(null)
   
   useEffect(() => {
    const tl = gsap.timeline()
    tl.to('.duney', {left: 0})
        .to('.flowery', {right: 0})

    ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "100px",
        pin: true,
        animation: tl,
        scrub:1,
        // markers: true
    })
   },[])
  return (
    <div className='w-full h-full overflow-hidden absolute' ref={containerRef}>
        <img src={stoney} alt="" id='stoney'  className='object-cover absolute top-0 stoney'/>
        <img src={duney} alt="" id='duney'  className='object-cover absolute -left-full top-0 duney'/>
        <img src={flowery} alt="" id='flowery' className='object-cover absolute -right-full top-0 flowery'/>
      
    </div>
  )
}

export default Colors
