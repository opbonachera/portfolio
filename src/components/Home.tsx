import 'animate.css'
export default function AnimatedTitle() {

  return (
    <>
      <div style={{height: '100vh'}}>
        <div className=" animate__animated animate__fadeInDown h-100 d-flex flex-column align-items-center justify-content-center">
          <h1 className="display-3 fw-bolder text-center">Frontend Web Developer</h1>
          <p className="fs-4 w-50 text-center">Welcome! My name is Ornella Bonachera. I am a Frontend Web Developer with a year of experience that also pursues a degree in Informatics Engineering.</p>
          <button className="btn btn-dark button"> <a className="text-decoration-none text-white" target="blank" href='pdf/cvenglish.pdf' download>Download CV</a></button>
        </div>
      </div>
    </> 
  );
}