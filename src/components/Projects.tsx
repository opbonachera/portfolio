import Image from "next/image"
import { ProjectCard } from "./ProjectCard"
import ExplorerImagePath from '../../public/countries.jpg'

export default function Projects(){
    return(
        <>
            <div className="bg-home-lightest pt-5 p-3" id="#projects">
                <h1 className="text-center font-alice display-5 mb-4" id="#">Mis proyectos</h1>
                <div id="carouselExampleAutoplaying" className="carousel slide m-auto" data-bs-ride="carousel" style={{width:'40%'}}>
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
        </>
    )
}