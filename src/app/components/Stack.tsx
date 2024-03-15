export const Stack = () =>{
    return(
        <>
            <div id="stack-container" className="d-flex flex-column align-items-center justify-content-center" style={{ height:'100%',minWidth: '350px', width: '100%'}}>
                <div className="w-75">
                    <h1 style={{ fontWeight: 900 }} className="display-2 mb-3">Stack</h1>
                    <hr />
                    
                    <div className="row mb-4 fs-5">
                        <div className="col-12">
                            <p><span className="merriweather">Programming Languages: </span> Typescript | Javascript | Python | CSS</p>
                        </div>
                        <div className="col-12">
                            <p><span className="merriweather">Frameworks: </span> React.js | Next.js | Angular | Flask</p>
                        </div>
                        <div className="col-12">
                            <p><span className="merriweather">Technologies and tools: </span> HTML | Bootstrap | GIT | Docker | SCRUM | HTTP Protocol | Design Patterns</p>
                        </div>
                        <div className="col-12">
                            <p><span className="merriweather">Languages: </span> Spanish | English </p>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap">
                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/html.png" className="stack-image" />
                            </div>
                        </div>
                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/css.png" className="stack-image" />
                            </div>
                        </div>
                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/js.png" className="stack-image" />
                            </div>
                        </div>
                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/ts.png" className="stack-image" />
                            </div>
                        </div>
                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/bootstrap.png" className="stack-image" />
                            </div>
                        </div>
                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/python.png" className="stack-image" />
                            </div>
                        </div>
                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/flask.png" className="stack-image" />
                            </div>
                        </div>
                        <div className="item onhover-down stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/git.png" className="stack-image" />
                            </div>
                        </div>

                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/db.png" className="stack-image" />
                            </div>
                        </div>

                        <div className="item onhover-down mx-2 stack-item d-flex flex-column align-items-center justify-content-center">
                            <div className="">
                                <img src="svg/docker.png" className="stack-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}