"use client";

import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

export default function AnimatedTitle() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="row w- m-auto"  id="main" style={{height:'100vh'}}>
        <motion.div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center p-5">
            <h1 className="display-4 fw-bold">Hello! I&apos;m Ornella</h1>
            <p className="w-75 fs-5 mt-5 text-center">I am a junior web developer with a year of hands-on experience, currently dedicated to advancing my skills while pursuing a degree in computer engineering. Proficient in frontend technologies like HTML, CSS, and JavaScript, I am passionate about creating engaging and user-friendly interfaces. For a comprehensive overview of my skills, experience, and projects, please feel free to explore my CV.</p>
        </motion.div>
        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center p-5">
            <button id="btn" className="home-box-1">
              <Link to="#about">About me</Link>
            </button>
            <button id="btn" className="home-box-2">
              <Link to="#projects">Projects</Link>
            </button>
            <button id="btn" className="home-box-3">
              <Link to="#projects">Contact</Link>
            </button>
            <button id="btn" className="home-box-4">
              {/* <Link to="pdf/cvenglish.pdf" download>Download CV</Link> */}
              <a href="pdf/cvenglish.pdf" className="text-decoration-none text-dark" target="_blank">Download CV</a>
            </button>
          </div>
      </div>
    </> 
  );
}