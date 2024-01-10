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
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1])
    
    return(
        <>
            <motion.div ref={ref} className="row w-100 gradient-bg border rounded" id="#projects" style={{width:'100vh', scale:scaleProgress}}>
                <div className='p-5'>
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                        <h1 className="text-center">My projects</h1>
                        <p className='fs-3 text-center m-5 w-50'>Since I started coding I have eagerly immersed myself in a diverse array of projects spanning a wide spectrum of complexity. A glimpse into some of these projects is presented below.</p>
                    </div>
                    <div className="row container-fluid m-auto p-5 w-100" >
                        <ProjectCard 
                                    title="World Explorer" 
                                    description="World Explorer is a simple web application I created to investigate and get country information by searching for their country name, their capital or their region. It works with the RESTCountries API. "
                                    imagePath={ExplorerImagePath}
                                    stack={["Angular", "RXJS", "HTML", "Typescript", "CSS", "Bootstrap"]}
                                    projectLink="https://countries-app-livid-zeta.vercel.app/"  
                                    githubLink="https://github.com/opbonachera/countries-app" 
                                    bgColor="home-box-1"/>
                        <ProjectCard 
                                    title="Psicoweb" 
                                    description="The platform serves as a network for psychologists, offering patients the convenience of managing appointments. It primarily focuses on two key features: facilitating CRUD operations for appointments and providing seamless user registration and authentication processes."
                                    imagePath={ExplorerImagePath}
                                    stack={["Angular", "RXJS", "HTML", "CSS", "Bootstrap", "RXJS", "Node.js", "Nest.js", "MongoDB"]}
                                    githubLink="https://github.com/opbonachera/countries-app"
                                    bgColor="home-box-2" />
                        
                    </div>
                </div>
            </motion.div>
        </>
    )
}