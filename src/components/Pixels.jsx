import React from 'react'
import overview from '../assets/camera-overview.jpg'

const Pixels = () => {
  return (
    <section className='w-full h-full bg-black overview-bg relative flex flex-col gap-4'>
      <div className='text-container_overview w-full p-8 '>
        <h1 className='text-white text-5xl secondary-font mx-4 pixels__section_header'>Top-notch NPU. Industry-leading<br/> camera. Now with AI</h1>
      </div>
      <div className='w-full h-full relative' >
        <div className='absolute first_cam  '>
          <div className='text-white info-display'>
            <h1 className='secondary-font text-primary text-5xl header__h1'>12MP</h1>
            <p className='text-2xl primary-font-light header__p'>Ultra Wide</p>
          </div>
          <div className='first-hr info-display'/>
        </div>
        <div className='absolute second_cam'>
            <div className='text-white flex flex-col items-center info-display'>
              <h1 className='secondary-font text-primary text-5xl header__h1'>200MP</h1>
              <p className='text-2xl primary-font-light header__p'>Wide-angle & 2x Optical<br/> Quality Zoom</p>
            </div>
            <div className='second-hr info-display'/>
          
        </div>
        <div className='absolute third_cam'>
          <div className='third-hr info-display'/>
          <div className='flex flex-col items-center info-display'>
            <h1 className='secondary-font text-primary text-5xl header__h1'>50MP</h1>
            <p className='text-2xl primary-font-light text-white header__p'>5x Optical Zoom & 10x<br/> Optical Quality Zoom</p>
          </div>
        </div>
        <div className='absolute fourth_cam info-display'>
          <div className='fourth-hr info-display'/>
          <div className='flex flex-col items-center info-display'>
            <h1 className='secondary-font text-primary text-5xl header__h1'>10MP</h1>
            <p className='text-2xl primary-font-light text-white header__p'>3x Optical Zoom</p>
          </div>
        </div>
        <div className='absolute fifth_cam'>
          <div className='flex flex-col items-center info-display'>
            <h1 className='secondary-font text-primary text-5xl header__h1'>12MP</h1>
            <p className='text-2xl primary-font-light text-white header__p'>Selfie Camera</p>
          </div>
          <div className='fifth-hr info-display'/>
        </div>
        <img src={overview} alt="cameras" className='w-full h-full object-cover ' />

      </div>
  
      
    </section>
  )
}

export default Pixels
