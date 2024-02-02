"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

export default function About(){
    return(
        <>
            <div style={{}}>
                <div className="row w-100 d-flex p-5 justify-content-evenly">
                    <div className='card d-flex align-items-center justify-content-center col-sm-12 col-md-4 col-lg-4 p-5 text-center border shadow-sm mb-3 bg-dark text-white' style={{width:'30rem'}}>
                        <p>My journey into the world of programming began in my final years of high school when I discovered my passion for technology and the positive impact it can have on people&apos;s lives.</p>
                    </div>
                    <div className='card d-flex align-items-center justify-content-center col-sm-12 col-md-4 col-lg-4 p-5 text-center border shadow-sm mb-3 bg-dark text-white' style={{width:'30rem'}}>
                        <p>Since then, I have dedicated myself to learning about the subject through reading books, taking courses, and working on small projects.</p>
                    </div>
                    <div className='card d-flex align-items-center justify-content-center col-sm-12 col-md-4 col-lg-4 p-5 text-center border shadow-sm mb-3 bg-dark text-white' style={{width:'30rem'}}>
                        <p>Thanks to my perseverance and dedication, I started working as a junior web developer right after completing my high school studies, a position I have been in for approximately 10 months. You can find out more about my experience on my CV.</p>
                    </div>
                </div>

                <div>
                    <h5 className='text-center display-6 fw-bolder'>My Stack</h5>
                </div>
                    <div className="d-flex align-items-center justify-content-center" >
                        
                        <div className='' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                    </div>
                 
            </div>
        </>
    )

}