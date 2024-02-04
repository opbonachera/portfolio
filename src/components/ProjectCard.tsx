import Image from "next/image"
import { CardComponent as Props } from "@/interfaces/CardComponent"
import Link from "next/link";

export const ProjectCard: React.FC<Props> = ({ title, imagePath, description, stack, projectLink, githubLink, bgColor }) =>{
    return(
        <>
           <div className="col-12 col-lg-4 col-md-4 mx-5 rounded d-flex align-items-center justify-content-center bg-dark text-white">
                <div className="p-5 d-flex align-items-center flex-column justify-content-center">
                    <div className="">
                        <h5 className="fw-bold text-center">{ title }</h5>
                        <p className="text-centerm-5">{ description }</p>
                        <div className="row">
                            {
                                stack.map(e => <div className="col link-tag">{ e }</div>)
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        
                    </div>
                </div>
           </div>
        </>
    )
}