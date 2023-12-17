import Image from "next/image"
import { CardComponent as Props } from "@/interfaces/CardComponent"

export const ProjectCard: React.FC<Props> = ({ title, imagePath, description, stack, projectLink, githubLink }) =>{
    return(
        <>
            
            <div className="card p-5" style={{width:'40rem'}}>
            <div className="card-body text-center">
                <h5 className="card-title font-cursive">{ title }</h5>
                <p className="card-text font-inter">{ description }</p>
                <p className="card-text font-alice">{ stack }</p>
                <a className="text-dark" href={projectLink} target="_blank">Ir al proyecto</a>
            </div>
            <hr />
            <div className="h-100 w-100">
                <Image src={imagePath} alt="" className="img-fluid"/>
            </div>
            
            <a href={githubLink} target="_blank" className="text-dark p-2 text-center font-cursive">Github repository</a>
            </div>
            
        </>
    )
}