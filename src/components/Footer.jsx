import React, { useEffect, useRef } from "react"
import footerVid from "../assets/footer-vid.mp4"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"


const Footer = () => {
    const footerVidRef = useRef(null)
    const lastVideo = footerVidRef.current
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: footerVidRef.current,
            start: "top-=100 top",
            end: "bottom bottom",
            // markers: true,
            scrub: true,
            onEnter: () => {
                footerVidRef.current.play()
            },
            onLeaveBack: () => {
                footerVidRef.current.pause()
            }

        })
    },[])
    return(
        <section className="w-screen h-screen ">
            <video src={footerVid} muted playsInline loop  className="object-cover w-full h-full" ref={footerVidRef}></video>
        </section>
    )
}
export default Footer