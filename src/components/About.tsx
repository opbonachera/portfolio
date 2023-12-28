import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faC, faCode } from "@fortawesome/free-solid-svg-icons" 

export default function About(){
    return(
        <>
            <div className="" id="#about">
                <div className="row w-100 px-5 font-roboto" >
                    
                    <div className="col-6 p-5">

                        <h5 className="display-5 p-2">Sobre mi</h5>
                        <p className="">My journey into the world of programming began in my final years of high school when I discovered my passion for technology and the positive impact it can have on people's lives.</p>
                        <p>Since then, I have dedicated myself to learning about the subject through reading books, taking courses, and working on small projects.</p>
                        <p>Thanks to my perseverance and dedication, I started working as a junior web developer right after completing my high school studies, a position I have been in for approximately 10 months.</p>
                    </div>
                    
                    <div className="col-6 p-5">
                        <h5 className="display-5">Experience</h5>
                        <p><span className="fw-bold">National University of Avellaneda • Junior Web Developer  </span>| March 2023 - Present</p>
                        <p>I actively contribute to the development, refactoring, and optimization of the university's systems in collaboration with a dedicated team of programmers. While specializing in frontend tasks, I also take on some backend responsibilities. Currently, I am involved in the refactoring of a content management system using React.js and Next.js for the frontend, Python for backend development, and PostgreSQL for the database.</p>
                    
                        <p><span className="fw-bold">Freelance • Support Assistant and WordPress Developer  </span>March 2022 – December 2022</p>
                        <p>I successfully led training sessions for employees at a sports store, instructing them in the management and operation of their online store built with WordPress. Additionally, I actively participated in the development of the store, specializing in the implementation of various plugins and enhancing the overall design.</p>
                    </div>
                    <div className="col-12 p-5">
                        <h5 className="display-5">Stack</h5>
                        <div className="d-flex align-items-center justify-content-center p-5">
                            <div className="row">
                                <div className="col"><img src="html.png" alt="" id="img" /></div>
                                <div className="col"><img src="css-3.png" alt=""  id="img"/></div>
                                <div className="col"><img src="typescript.png" alt="" id="img" /></div>
                                <div className="col"><img src="js.png" alt="" id="img" /></div>
                                <div className="col"><img src="react.png" alt="" id="img" /></div>
                                <div className="col"><img src="git.png" alt="" id="img" /></div>
                                <div className="col"><img src="docker.png" alt="" id="img" /></div>
                            </div>
                            
                            
                            
                            
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div> 
        </>
    )
}