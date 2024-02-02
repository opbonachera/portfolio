import Image from "next/image"
import { CardComponent as Props } from "@/interfaces/CardComponent"
import Link from "next/link";

export const ProjectCard: React.FC<Props> = ({ title, imagePath, description, stack, projectLink, githubLink, bgColor }) =>{
    return(
        <>
            {/* <div className="d-flex align-items-center justify-content-center w-100 mb-2" style={{ width: '100vh'}}>
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
           </div> */}
           <div>
                <div className="row p-2 border shadow-sm p-5 w-100 mb-5 bg-light">
                    <div className="col-12  col-md-6 col-lg-6 p-5 rounded d-flex flex-column align-items-center justify-content-center">
                        <h5 className="display-5 fw-bold text-center">{ title }</h5>
                        <p className="text-center fs-4 m-5">{ description }</p>
                        <div className="row">
                            {
                                stack.map(e => <div className="col link-tag">{ e }</div>)
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className='border rounded' style={{ width: '100%', height:'100%'}}>
                            <Image src={imagePath} alt={title} className="img-fluid"/>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}