import 'animate.css'
export default function About(){
    return(
        <>
            <div style={{}} id="#about" className="animate__animated animate__fadeIn">
                <div>
                    <div className="row w-100 d-flex align-items-center justify-content-center">
                        <div style={{height:'47vh'}} className="rounded col-12 col-md-3 col-lg-3 m-2 p-5 bg-dark text-white d-flex align-items-center justify-content-center">
                            <p className='text-center'>My journey into the world of programming began in my final years of high school when I discovered my passion for technology and the positive impact it can have on people&apos;s lives.</p>
                        </div>
                        <div style={{height:'47vh'}} className="rounded col-12 col-md-3 col-lg-3 m-2 p-5 bg-dark text-white d-flex align-items-center justify-content-center">
                           <p className='text-center'>Since then, I have dedicated myself to learning about the subject through reading books, taking courses, and working on small projects.</p>
                        </div>
                        <div style={{height:'47vh'}} className="rounded col-12 col-md-3 col-lg-3 m-2 p-5 bg-dark text-white d-flex align-items-center justify-content-center">
                            <p className='text-center'>Thanks to my perseverance and dedication, I started working as a junior web developer right after completing my high school studies, a position I have been in for approximately a year. You can find out more about my experience on my CV.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='text-center display-6 fw-bolder mt-5'>My Stack</h5>
                </div>
                    <div className="row w-100 d-flex align-items-center justify-content-center" >
                        
                        <div className='col-6 col-md-2 col-lg-2' id="stack-box">
                            <img src="/icons/typescript.png" id="stack-icon" />
                        </div>
                        <div className='col-6 col-md-2 col-lg-2' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='col-6 col-md-2 col-lg-2' id="stack-box">
                            <img src="/icons/github.png" id="stack-icon" />
                        </div>
                        <div className='col-6 col-md-2 col-lg-2' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='col-6 col-md-2 col-lg-2' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='col-6 col-md-2 col-lg-2' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='col-6 col-md-2 col-lg-2' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                        <div className='col-6 col-md-2 col-lg-2' id="stack-box">
                            <img src="/icons/css.png" id="stack-icon" />
                        </div>
                    </div>
                 
            </div>
        </>
    )

}