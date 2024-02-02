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
      <div style={{height: '80vh'}}>
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
          <h1 className="display-3 fw-bolder text-center">Frontend Web Developer</h1>
          <p className="fs-4 w-50 text-center">Welcome! My name is Ornella Bonachera. I am a Frontend Web Developer with a year of experience that also pursues a degree in Informatics Engineering.</p>
          <button className="btn btn-dark">Download CV</button>
        </div>
      </div>
    </> 
  );
}