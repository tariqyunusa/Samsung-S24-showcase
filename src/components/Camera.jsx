import { useRef } from "react";
import React, { useEffect, useState } from 'react';
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import { useScroll, useTransform, motion } from 'framer-motion';

const Camera = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const screenWidth = window.innerWidth
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 2 : 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 3 : 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 4 : 6]);
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 5 : 7]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 6 : 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 7 : 9]);

    const images = [
        {
            src: img1,
            scale: scale4,
            width: isMobile ? "35vw" : "25vw",
            height: isMobile ? "30vh" : "25vh",
            top: isMobile ? "-10px" : "-10px",
            left: isMobile ? "-15px" : "-20px",
            // center center
        },
        {
            src: img2,
            scale: scale5,
            width: isMobile ? "29vw" : "11.53vw",
            height: isMobile ? "20vh" : "40vh",
            top: isMobile ? "0px" : "50px",
            left: isMobile ? "-170px" : "-330px",
            // center left
        },
        {
            src: img3,
            scale: scale6,
            width: isMobile ? "30vw" : "12vw",
            height: isMobile ? "20vh" : "29.6vh",
            top: isMobile ? "200px" : "220px",
            left: isMobile ? "130px" : "290px",
            // bottom right
        },
        {
            src: img4,
            scale: scale7,
            width: isMobile ? "30vw" : "12vw",
            height: isMobile ? "30vh" : "25vh",
            top: isMobile ? "-10px" : "-10px",
            left: isMobile ? "130px" : "290px",
            // top right
        },
        {
            src: img5,
            scale: scale8,
            width: isMobile ? "100vw" : "38.5vw",
            height: isMobile ? "20vh" : "21.5vh",
            top: isMobile ? "-200px" : "-200px",
            left: isMobile ? "-50px" : "0px",
            // top top
        },
        {
            src: img6,
            scale: scale9,
            width: isMobile ? "60vw" : "22vw",
            height: isMobile ? "20vh" : "29vh",
            top: isMobile ? "200px" : "210px",
            left: isMobile ? "-80px" : "0px",
            // bottom right
        },
    ];

    return (
        <section ref={container} className='w-screen h-auto px-12 relative mobile-section'>
            <div className='flex justify-between align-mobile '>
                <h2 className='secondary-font text-5xl text-mobile heading-special-mobile'>From 0.6x to 10x</h2>
                <div className='w-100 align-mobile'>
                    <h1 className='primary-font-darker text-2xl text-black text-mobile-p'>
                    Digital zoom closes in, AI Zoom amps it up
                    </h1>
                    <p className='primary-font-darker text-mobile-p'>Go from scenic to specific thanks to deep learning-<br/>based AI Zoom. Glide seamlessly past 1x zoom all the<br/> way to 100x zoom while AI amps up the details at all<br/> the points in between.10,15</p>
                </div>
            </div>
            
            <div className='sticky top-0 h-screen w-screen overflow-hidden '>
                {images.map(({ src, scale, top, left, width, height }, index) => (
                    <motion.div key={index} className='w-full h-full absolute top-0 flex justify-center items-center' style={{ scale }}>
                        <div style={{ width, height, left, top }} className=' relative ' >
                            <img src={src} alt="" className='object-cover w-full h-full' />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Camera;
