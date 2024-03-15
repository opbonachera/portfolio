
export const Experience = () =>{
    return(
        <>
            <div  id="exp-container" className="d-flex flex-column align-items-center justify-content-center" style={{ height:'100%',minWidth: '350px', width: '100%'}}>
                <div className="w-75">
                    <h1 style={{ fontWeight: 900 }} className="display-2 mb-3">Experience</h1>
                    <hr />
                </div>
                <div className="w-75">
                    <p className="merriweather" style={{ fontWeight: 900 }}>Fullstack Web Developer | <span className="fst-italic">Universidad Nacional de Avellaneda</span> <span className="d-block small">March 2023 - Present</span></p>
                    <p className="merriweather">I contribute in the development, refactoring, mainteinance and optimization of the organization's systems trough close collaboration with my teammates. Some of my tasks include API integration, component development, bug fixes and system design.</p>
                    <div className="row">
                        <div className="stack-tag col">Javascript</div>
                        <div className="stack-tag col">CSS</div>
                        <div className="stack-tag col">Html</div>
                        <div className="stack-tag col">Python</div>
                        <div className="stack-tag col">React</div>
                        <div className="stack-tag col">Flask</div>
                        <div className="stack-tag col">Docker</div>
                        <div className="stack-tag col">SqlAlchemy</div>
                        <div className="stack-tag col">Php</div>
                        <div className="stack-tag col">Php</div>
                    </div>
                </div>


                <div className="w-75">
                    <p className="merriweather" style={{ fontWeight: 900 }}> Support Assistant and Wordpress Developer | <span className="fst-italic">CBDeportesOK</span> <span className="d-block small">July 2021 - December 2021</span></p>
                    <p className="merriweather">Successfully led training sessions for employees at a sports store, instructing them in the administration and operation of their online store built on WordPress. Additionally, actively participated in the development of the store, specializing in implementing various plugins and enhancing overall design.</p>
                    <div className="row">
                        <div className="stack-tag col">Javascript</div>
                        <div className="stack-tag col">CSS</div>
                        <div className="stack-tag col">Html</div>
                        <div className="stack-tag col">Wordpress</div>
                        <div className="stack-tag col">PHP</div>
                    </div>
                </div>
               
            </div>
        </>
    )
}