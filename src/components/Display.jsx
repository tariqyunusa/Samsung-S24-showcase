import React from 'react'
import vde from '../assets/galaxy-s24-ultra-highlights-display-vde.jpg'
import performance from "../assets/performance.mp4"

const Display = () => {
  return (
    <section className='w-screen h-screen bg-white px-12 py-10 '>
        <div className='w-full flex justify-between items-center'>
            <div className='flex gap-4'> 
            <h3 className='secondary-font text-2xl p-4'>2600 nit display. Our brightest<br/> adaptive mobile display under<br/> the sun</h3>
            <img src={vde} alt="chip" />
            </div>
            <div className='text-xl primary-font-light'><p>Our most immersive display comes with<br/> some major visibility upgrades. Corning®<br/> Gorilla® Armor reduces reflections and<br/> improves visual clarity, even in direct<br/> sunlight. Then, an improved Vision Booster<br/> enhances contrast and colour for a clearly <br/>exceptional experience.24</p></div>
        </div>
        <div className='w-full  flex items-center justify-center'>
    <video src={performance} muted autoPlay loop playsInline className='object-cover w-3/5 my-16'></video>
        </div>
    </section>
  )
}

export default Display
