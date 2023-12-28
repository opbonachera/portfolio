import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Contact(){
    return(
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" id="#contact">
                {/* <h1 classNameName="font-roboto pt-4 mb-5">Contacto</h1>
                
                <div>
                    <a id="contact-anchor" href="https://www.linkedin.com/in/obonachera/" classNameName="text-dark" target="_blank">LINKEDIN </a> |
                    <a id="contact-anchor" href="mailto:obonachera@gmail.com" classNameName="text-dark" target="_blank"> EMAIL </a> |
                    <a id="contact-anchor" href="https://github.com/opbonachera" classNameName="text-dark" target="_blank"> GITHUB </a> | 
                    <a id="contact-anchor" href="" classNameName="text-dark" target="_blank"> CV </a>
                </div> */}

                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div>
            </div>
        </>
    )
}