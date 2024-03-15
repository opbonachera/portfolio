import Image from "next/image"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import Email from "@mui/icons-material/Email";

import Link from "next/link";
export const Contact = () =>{
    return (
        <>
            <div id="cont-container" className="d-flex flex-column align-items-center justify-content-center" style={{ height:'100%'}}>
                <div className="w-75">
                    <h1 style={{ fontWeight: 900 }} className="display-2 mb-2">Contact</h1>
                    <hr />
                    <p className="merriweather">Let's connect! You can find me on:</p>
                </div>
                <div className="w-75">
                    <Link target="_blank" className="text-decoration-none" href="https://www.linkedin.com/in/obonachera/">
                        <div className="mt-3 bg-main lato onhover-down  d-flex justify-content-between align-items-center">
                            <div className="d-flex fs-5 fw-bold mx-4 h-100 my-3 align-items-center justify-content-center">
                                <LinkedInIcon className="me-2" />Linkedin: /obonachera
                            </div>
                            <div className="mx-2">
                                <ChevronRightIcon className="me-2" />
                            </div>
                        </div>
                    </Link>
                    
                    <Link target="_blank" className="text-decoration-none" href="mailto:obonachera@gmail.com">
                        <div className="mt-3 bg-main lato onhover-down  d-flex justify-content-between align-items-center">
                            <div className="d-flex fs-5 fw-bold mx-4 my-3 align-items-center justify-content-center">
                                <Email className="me-2" />Mail: obonachera@ gmail.com
                            </div>
                            <div className="mx-2">
                                <ChevronRightIcon />
                            </div>
                        </div>
                    </Link>
                    
                    <Link target="_blank" className="text-decoration-none" href="https://github.com/opbonachera">
                        <div className="mt-3 bg-main lato onhover-down  d-flex justify-content-between align-items-center">
                            <div className="d-flex fs-5 fw-bold mx-4 h-100 my-3 align-items-center justify-content-center">
                                <GitHubIcon className="me-2" />Github: /obonachera
                            </div>
                            <div className="mx-2">
                                <ChevronRightIcon />
                            </div>
                        </div>
                    </Link>

                    

                    <div className="mt-3 bg-main lato   d-flex justify-content-between align-items-center">
                        <div className="d-flex fs-5 fw-bold mx-4 h-100 my-3 align-items-center justify-content-center">
                            <LocalPhoneIcon className="me-2" />Phone number: +54 9 11 3565-8028
                        </div>
                        <div className="mx-2">
                            <ChevronRightIcon />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}