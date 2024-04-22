import React, { useEffect, useRef } from 'react';
import heroVid from "../assets/galaxy-hero-section.webm";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);

    const videoRef = useRef(null);
    const textRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current;

        ScrollTrigger.create({
            trigger: video,
            start: "top-=70 top",
            end: "bottom top",
            // markers: true,
            
            onEnter: () => {
                video.play();
            },
            onLeaveBack: () => {
                video.pause();
            }
        });
        const tl = gsap.timeline()

        tl.to(".stagger", {
            scrollTrigger: {
            trigger: video,
            start: "top-=70 top",
            end: "bottom-=700 top", 
            scrub: true,
            // markers: true,
            },
            y: -100,
            opacity: 1,
            stagger: 1.5
        })

       

    }, []);
    const centeredText = ["Sleek.", "Strong.", "Stunning."]

    return (
        <div className='h-hero w-screen flex justify-center items-center overflow-hidden'>
            <video src={heroVid} ref={videoRef} className='object-cover w-full h-full overflow-x-hidden' loop playsInline muted></video>
            <div className='flex absolute text-white gap-4 '>
              {centeredText.map((item, index) => (
                <h1 className='secondary-font text-6xl stagger smaller-font opacity-0 ' key={index}>{item}</h1>
              ))}
            </div>
        </div>
    );
}

export default Hero;