import Image from "next/image"
import { CardComponent as Props } from "@/interfaces/CardComponent"
import Link from "next/link";

export const ProjectCard: React.FC<Props> = ({ title, imagePath, description, stack, projectLink, githubLink, bgColor }) =>{
    return(
        <>
            <div className="d-flex align-items-center justify-content-center w-100 mb-2" style={{ width: '100vh'}}>
                <div className="card text-center p-5 w-75">

                    <div className="row">
                        <div className="col-12 p-5 d-flex flex-column justify-content-center align-items-center">
                            <p className="p-2 display-5">{ title }</p>
                            <p className="w-75">{ description }</p>
                            <div className="row">
                                {
                                    stack.map( element => <div className="col"id="stack-tag">{ element }</div>)
                                }
                            </div>
                            <div className="text-center mt-5 p-4">
                            <Link href="#" className="link">Github repository</Link>
                            <br />
                            {projectLink && <Link href="#" className="link">Live demo</Link>}
                        </div> 
                        </div>
                    </div>

                </div>
           </div>
        </>
    )
}