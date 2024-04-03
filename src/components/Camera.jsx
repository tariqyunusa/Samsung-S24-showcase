import { useRef } from "react"
import React  from 'react'
import img1 from "../assets/image1.jpg"
import img2 from "../assets/image2.jpg"
import img3 from "../assets/image3.jpg"
import img4 from "../assets/image4.jpg"
import img5 from "../assets/image5.jpg"
import img6 from "../assets/image6.jpg"
import { useScroll, useTransform, motion } from 'framer-motion'



const Camera = () => {

    const container = useRef(null)
    const {scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0,1],[1,4])
    const scale5 = useTransform(scrollYProgress, [0,1],[1,5])
    const scale6 = useTransform(scrollYProgress, [0,1],[1,6])
    const scale8 = useTransform(scrollYProgress, [0,1],[1,8])
    const scale9 = useTransform(scrollYProgress, [0,1],[1,9])
    const scale7 = useTransform(scrollYProgress, [0,1],[1,7])
    
    const images = [{
        src: img1,
        scale: scale4,
        width: "25vw",
        height: "25vh",
        top:"-10px",
        left: "-20px",

    },
    {
        src: img2,
        scale: scale5,
        width: "11.53vw",
        height: "40vh",
        top: "50px",
        left: "-330px",
    },
    {
        src: img3,
        scale: scale6,
        width: "12vw",
        height: "29.6vh",
        top: "220px",
        left: "290px",
    },
    {
        src: img4,
        scale: scale7,
        width: "12vw",
        height: "25vh",
        top: "-10px",
        left: "290px",
    },
    {
        src: img5,
        scale: scale8,
        width: "38.5vw",
        height: "21.5vh",
        top: "-200px",
        left: "0px",
    },
    {
        src: img6,
        scale: scale5,
        width: "22vw",
        height: "29vh",
        top: "210px",
        left: "0px",
    },
]


  return (
    <section ref={container} className='w-screen h-100 px-12 relative '>
        <div className='flex justify-between '>
            <h2 className='secondary-font text-5xl'>From 0.6x to 10x</h2>
            <div className='w-100'>
                <h1 className='primary-font-darker text-2xl text-black'>
                Digital zoom closes in, AI Zoom amps it up
                </h1>
                <p className='primary-font-darker'>Go from scenic to specific thanks to deep learning-<br/>based AI Zoom. Glide seamlessly past 1x zoom all the<br/> way to 100x zoom while AI amps up the details at all<br/> the points in between.10,15</p>
        </div>
           
        </div>
       
        <div className='sticky top-0 h-screen w-screen overflow-hidden '>
            {images.map(({src, scale, top, left, width, height}, index) => (
                 <motion.div key={index}  className='w-full h-full absolute top-0 flex justify-center items-center' style={{ scale: scale}}>
                 <div  style={{ width: width, height: height, left: left, top: top} } className=' relative ' >
                 <img src={src} alt="" className='object-cover w-full h-full' />
                 </div>
             </motion.div>
            ))}
           
        </div>
        
        
    </section>
  )
}

export default Camera
