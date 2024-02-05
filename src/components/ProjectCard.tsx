import Image from "next/image"
import { CardComponent as Props } from "@/interfaces/CardComponent"

export const ProjectCard: React.FC<Props> = ({ title, imagePath, description, stack, projectLink, githubLink, bgColor }) =>{
    return(
        <>
           <div style={{ height:'40rem'}} className="col-12 col-lg-4 col-md-4 mx-5 rounded d-flex align-items-center justify-content-center bg-dark text-white">
                <div className="d-flex flex-column align-items-center justify-content-between h-100 p-5">
                    <div id="title" className="fw-bolder">{ title }</div>
                    <div id="description" className="text-center">{ description }</div>
                    {/* <div id="img"><Image src={imagePath} alt={title}></Image></div> */}
                    <div className="row">
                        {stack.map(e=><div className="col link-tag">{ e }</div>)}
                    </div>
                    <div>
                        <Image src="/icons/github.png" className="mx-3" alt="github" width={40} height={40}></Image>
                        <Image src="/icons/github.png" className="mx-3" alt="github" width={40} height={40}></Image>
                    </div>
                </div>
           </div>
        </>
    )
}