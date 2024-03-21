import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Email from "@mui/icons-material/Email";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp'; 
import { Typewriter } from 'react-simple-typewriter'

export const Home = () =>{
    return(
        <>
            <div id='home' className="" style={{minWidth: '350px', width: '100%'}}>
                <div className="w-75">
                    <h1 style={{ fontWeight: 900 }} className="display-2 mb-3">
                    <Typewriter
                        words={['Hello! I am Ornella']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000} />
    
                    </h1>
                    <hr />
                </div>
                <div className="w-75">
                    <p className="merriweather w-75">I am an Informatics Engineering Student and I have been working in the tech industry since March 2023 as a Fullstack Web Developer.</p>
                    <LocationOnSharpIcon /><span className="fw-bold">Buenos Aires, Argentina.</span>
                </div>
                <div className="w-75 mt-2">
                    <Link target="_blank" href="https://www.linkedin.com/in/obonachera/" className="text-dark"><LinkedInIcon  /></Link>
                    <Link target="_blank" href="mailto:obonachera@gmail.com" className="text-dark"><Email /></Link>
                    <Link target="_blank" href="https://github.com/opbonachera" className="text-dark"><GitHubIcon /></Link>
                    
                    <Link href="/pdf/cvenglish.pdf" className="text-decoration-none text-black fs-5 fw-bolder mt-3 d-block">Download my CV</Link>
                </div>
                <div className="w-75 mt-2">
                    <div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}