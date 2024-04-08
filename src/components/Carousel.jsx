import React from 'react'
import { sliderAssets } from '../utils' 
import vid1 from '../assets/video1.webm'
import vid2 from '../assets/video2.mp4'
import vid3 from '../assets/video3.webm'

const videos = [vid1, vid2, vid3]


const Carousel = () => {
  return (
    <section className=' h-screen flex bg-grey absolute top-0 justify-center items-center  px-12 gap-12'>
        {sliderAssets.map(({title, paragraph, video}, index) => (
            <div key={index} className='rounded-md  w-carouselWidth h-carouselHeight bg-black gap-8 p-4 flex '>
                <div className=''>
                <video src={videos[index]} loop muted playsInline autoPlay className='object-cover'></video>
                </div>
                <div className='flex flex-col gap-8 w-2/3'>
                    <h1 className='secondary-font  text-4xl text-white'>{title}</h1>
                    <p className='text-white primary-font-light'>{paragraph}</p>
                    <button className='rounded-full p-3 text-white bg-black secondary-font border-2 self-start border-white' >Explore more</button>
                </div>
            </div>
           
        ))}
        <div className='bg-black  w-[10vw] rounded-full absolute p-1 gap-4 top-[90vh] flex left-[20%] my-8'>
          <div className='w-4  rounded-lg bg-white indicator active '></div>
          <div className='w-4 h-4 rounded-lg bg-white indicator'></div>
          <div className='w-4 h-4 rounded-lg bg-white indicator'></div>
        </div>
      
    </section>
  )
}

export default Carousel
