"use client";

import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function AnimatedTitle() {
  const text = 'JUNIOR WEB DEVELOPER AND INFORMATICS ENGINEERING STUDENT' // This would normally be passed into this component as a prop!
  
  const ctrls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <>
      <motion.div style={{ height:"90vh" }} className="mb-0 " id='#home'>
            <div className="row h-100 m-0">
                <div className="col-12 text d-flex flex-column align-items-center justify-content-center">

                        <Title aria-label={text} role="heading" className="w-50 text-center mb-4">
                          {text.split(" ").map((word, index) => {
                            return (
                              <Word
                                ref={ref}
                                id="text"
                                aria-hidden="true"
                                key={index}
                                initial="hidden"
                                animate={ctrls}
                                variants={wordAnimation}
                                transition={{
                                  delayChildren: index * 0.25,
                                  staggerChildren: 0.05,
                                }}
                              >
                                {word.split("").map((character, index) => {
                                  return (
                                    <Character
                                      aria-hidden="true"
                                      key={index}
                                      id="letter"
                                      variants={characterAnimation}
                                    >
                                      {character}
                                    </Character>
                                  );
                                })}
                              </Word>
                            );
                          })}
                        </Title>
                        
                        <div className="">
                          <button id="btn">
                              <Link className="nav-link " to='#projects' spy={true} smooth={true} duration={300}>See Projects</Link>
                          </button>
                          <button className="btn-cv">
                              <Link className="nav-link zoom w-100" to='#projects' spy={true} smooth={true} duration={300}>Download CV</Link>
                          </button>
                        </div>
                        
                        
                </div>
            </div> 
      </motion.div>
    </> 
  );
}