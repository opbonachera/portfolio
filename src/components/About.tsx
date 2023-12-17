import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faC, faCode } from "@fortawesome/free-solid-svg-icons" 

export default function About(){
    return(
        <>
            <div className="bg-home-lighter" id="#about">
                
                <div className="row d-flex align-items-center justify-content-center w-75 m-auto p-5">
                    <div className="col-lg-6 col-sm-12  d-flex flex-column align-items-center justify-content-center font-cursive p-3">
                        <h5 className="font-alice display-5 p-2">Sobre mi</h5>
                        <p className="">
                            Mi viaje en el mundo de la programación comenzó en mis últimos años de secundaria, cuando descubrí mi pasión por la tecnología y las mejoras que puede realizar en la vida de las personas. 
                        </p>
                        <p>
                            Desde entonces me dediqué a aprender sobre programación a base de la lectura de libros, realización de cursos y pequeños proyectos.</p>
                        <p>
                        Gracias a mi constancia y dedicación comencé a trabajar como desarrolladora web junior ni bien terminé mis estudios secundarios, puesto en el cual me desempeño desde hace aproximadamente 10 meses.
                        </p>
                    
                        <p className="font-alice display-5 text-center pt-3">Stack</p>     
                        <div className="d-flex flex-row align-items-center justify-content-between w-75">
                            <div className="m-4">
                                <h5 className="font-cursive">Lenguajes</h5>
                                <p>Typescript - Javascript - CSS</p>
                            </div>
                            <div className="m-3 text-center">
                                <h5 className="font-cursive">Frameworks</h5>
                                <p>React.js - Next.js - Angular</p>
                            </div>
                            <div className="m-4 text-end">
                                <h5 className="font-cursive">Otras tecnologias</h5>
                                <p className="">HTML - Bootstrap - GIT - Docker</p>
                            </div>                        
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-center justify-content-center mb-3 font-cursive">
                        
                        <h5 className="font-alice display-5">Experiencia</h5>
                        <p><span className="fw-bold">Universidad Nacional de Avellaneda •  Junior Web Developer </span>| Marzo 2023 - Presente</p>
                        <p>Contribuyo activamente al desarrollo, refactorización y optimización de los sistemas de la universidad en colaboración con un equipo de programadores dedicado. Aunque me especializo en tareas frontend, también asumo algunas responsabilidades de backend. Actualmente, participo en la refactorización de un administrador de contenido utilizando React.js y Next.js para el frontend, Python para el desarrollo del backend y PostgreSQL para la base de datos.</p>
                    
                        
                        <p><span className="fw-bold">Freelance • Support assistant and wordpress developer </span>| Marzo 2022 – Diciembre 2022</p>
                        <p>Dirigí con éxito sesiones de capacitación para empleados en una tienda de deportes, instruyéndolos en la administración y operación de su tienda en línea construida en WordPress. Además, participé activamente en el desarrollo de la tienda, especializándome en la implementación de varios plugins y mejorando el diseño general.</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}