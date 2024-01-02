"use client";
import { useRef } from 'react';
import { useScroll, motion, useTransform } from "framer-motion";

import { ProjectCard } from "./ProjectCard"
import ExplorerImagePath from '../../public/countries.jpg'


export default function Projects(){
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:[".5 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.7,1])
    
    return(
        <>
            <motion.div ref={ref} className="pt-5 p-5 row w-100 mt-5 mb-5" id="#projects" style={{width:'100vh', scale:scaleProgress}}>
                
                <div className="col-6 border rounded bg-dark text-white d-flex align-items-center justify-content-center flex-column">
                    <h1 className="text-center w-75">My Projects</h1>
                    <p className="text-cent w-75">Welcome to my project showcase, where I highlight some of the exciting coding ventures I&apos;ve undertaken. Each project represents a unique blend of creativity, problem-solving, and technical prowess. Dive in to explore the diverse range of applications I've crafted, showcasing my skills and passion for coding.</p>

                    <hr className="text-dark"/>

                    <h1 className="text-center mt-4">Contact</h1>
                    <div>
                    <a id="contact-anchor" href="https://www.linkedin.com/in/obonachera/"  target="_blank">LINKEDIN </a> |
                    <a id="contact-anchor" href="mailto:obonachera@gmail.com" target="_blank"> EMAIL </a> |
                    <a id="contact-anchor" href="https://github.com/opbonachera" target="_blank"> GITHUB </a> | 
                    <a id="contact-anchor" href="" target="_blank"> CV </a>
                    </div>
                </div>
                <div className="col-6">
                    <div id="carouselExampleAutoplaying" className="carousel slide m-auto w-100" data-bs-ride="carousel" style={{width:"40%"}}>
                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex align-items-center justify-content-center" >
                            <ProjectCard 
                                title="World Explorer" 
                                description="Buscador de información de países. Trabaja realizando peticiones HTTP a la API RESTCountries"
                                imagePath={ExplorerImagePath}
                                stack="STACK: Angular - Typescript - CSS - HTML - RXJS - Peticiones HTTP"
                                projectLink="https://countries-app-livid-zeta.vercel.app/"  
                                githubLink="https://github.com/opbonachera/countries-app" />
                        </div>
                        <div className="carousel-item">
                            
                        </div>
                        <div className="carousel-item">
                            
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}