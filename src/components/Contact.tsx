import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Contact(){
    return(
        <>
            <div className="bg-home-lightest p-5 d-flex flex-column align-items-center justify-content-center" id="#contact">
                <h1 className="font-alice text-center pt-4">Contacto</h1>
                <p className="text-center">En caso de que te interese contactarme, a continuación dejo mis datos.</p>
                
                <div >
                    <a href="https://www.linkedin.com/in/obonachera/" className="text-dark" target="_blank">LINKEDIN</a> |
                    <a href="mailto:obonachera@gmail.com" className="text-dark" target="_blank"> EMAIL</a> |
                    <a href="https://github.com/opbonachera" className="text-dark" target="_blank"> GITHUB</a> | 
                    <a href="" className="text-dark" target="_blank"> CV</a>
                </div>
            </div>
        </>
    )
}