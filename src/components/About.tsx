"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

export default function About(){
    const controls = useAnimation();
    const [ref, inView] = useInView()
    const squareVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: .5 } },
        hidden: { opacity: 0, scale: 0 }
      };
      
        useEffect(() => {
            if (inView) {
            controls.start("visible");
            }
        }, [controls, inView]);
    
    return(
        <>
            <motion.div className="" id="#about" ref={ref}
                                                 animate={ controls }
                                                 initial="hidden"
                                                 variants={squareVariants} >


                <div className="gradient-bg-2 row w-100 d-flex align-items-center justify-content-center " style={{ 'height': '100vh'}}>

                    <div className="col-12 col-lg-6 col-md-6">
                        <div className="w-75 p-5">
                            <h5 className="display-4">About Me</h5>
                            <p className="">My journey into the world of programming began in my final years of high school when I discovered my passion for technology and the positive impact it can have on people&apos;s lives.</p>
                            <p>Since then, I have dedicated myself to learning about the subject through reading books, taking courses, and working on small projects.</p>
                            <p>Thanks to my perseverance and dedication, I started working as a junior web developer right after completing my high school studies, a position I have been in for approximately 10 months. You can find out more about my experience on my CV.</p>
                        
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className='p-5'>
                                <h5 className='display-4'>Contact me</h5>
                                <div className="row p-5">
                                    <div className="col-12 p-2 align-items-center justify-content-start d-flex mt-3">
                                        <img src="svg/github.svg" id="img" className="svg"/>
                                        <h5> Github: /obonachera</h5>
                                    </div>
                                    <div className="col-12 p-2 align-items-center justify-content-start d-flex mt-3">
                                        <img src="svg/linkedin.svg" id="img" />
                                        <h5> Linkedin: /obonachera</h5>
                                    </div>
                                    <div className="col-12 p-2 align-items-center justify-content-start d-flex mt-3">
                                        <img src="svg/email.svg" id="img" />
                                        <h5>Email: obonachera@gmail.com</h5>
                                    </div>
                                </div>

                        </div>
                    </div>
                    <div className='d-flex align-items-center w-100 flex-column justify-content-center'>
                            <h5 className='display-4'>My stack</h5>
                            <div className='d-flex row align-items-center justify-content-center w-100'>
                                <img src="svg/html.svg" className="stack-svg" />
                                <img src="svg/css.svg" className="stack-svg" />
                                <img src="svg/js.svg" className="stack-svg" />
                                <img src="svg/ts.svg" className="stack-svg" />
                                <img src="svg/docker.svg" className="stack-svg" />
                                <img src="svg/angular.svg" className="stack-svg" />
                                <img src="svg/react.svg" className="stack-svg" />
                                <img src="svg/bootstrap.svg" className="stack-svg" />
                            </div>
                        </div>
                </div>
                
            </motion.div>
   
            
        </>
    )

}