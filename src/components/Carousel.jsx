import React, { useEffect, useState } from 'react';
import { sliderAssets } from '../utils';
import vid1 from '../assets/video1.webm';
import vid2 from '../assets/video2.mp4';
import vid3 from '../assets/video3.webm';

const videos = [vid1, vid2, vid3];

const Carousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((pre) => (pre === videos.length - 1 ? 0 : pre + 1))
      console.log("timer index", active);
    }, 5000)
    return () => clearInterval(timer)
  },[active])

  const handleNext = () => {
    setActive((prevActive) => (prevActive === videos.length - 1 ? 0 : prevActive + 1));
  };

  const handlePrev = () => {
    setActive((prevActive) => (prevActive === 0 ? videos.length - 1 : prevActive - 1));
  };
  console.log("normal active index", active);

  return (
    <section className='h-screen w-screen flex bg-grey absolute top-0 justify-center items-center overflow-x-auto px-12 gap-12'>
      {sliderAssets.map(({ title, paragraph }, index) => (
        <div key={index} onLoad={() => timer} className={`rounded-md w-carouselWidth h-carouselHeight  bg-black gap-8  p-4 flex ${active === index ? '' : 'hidden'}`}>
          <div className='img-none'>
            <video src={videos[index]} loop muted playsInline autoPlay className='object-cover'></video>
          </div>
          <div className='flex flex-col gap-8 w-2/3 comp-w'>
            <h1 className='secondary-font text-4xl text-white md:text-2xl '>{title}</h1>
            <p className='text-white primary-font-light'>{paragraph}</p>
            <button className='rounded-full p-3 text-white bg-black secondary-font border-2 self-start border-white'>Explore more</button>
          </div>
        </div>
      ))}

      <div className='bg-black w-[10vw] indicator-container rounded-full absolute p-1 gap-4 top-[90vh] flex  my-8'>
        {sliderAssets.map((_, index) => (
          <div className={active === index ? 'indicator_active' : 'indicator indicator_inactive'} key={index} onClick={() => setActive(index)}></div>
        ))}
      </div>

      {/* <button className='absolute top-1/2 transform -translate-y-1/2 left-0 bg-black text-white p-2 rounded-full' onClick={handlePrev}>
        Prev
      </button>
      <button className='absolute top-1/2 transform -translate-y-1/2 right-0 bg-black text-white p-2 rounded-full' onClick={handleNext}>
        Next
      </button> */}
    </section>
  );
};

export default Carousel;
