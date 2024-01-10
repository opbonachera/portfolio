"use client";
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top" id='navbar'>
                
        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="d-flex align-items-end  justify-content-end w-100 p-2">
                                <div>
                                    <Link to="#about" href="" className='m-5 fw-bolder link' id='navbar-item'>About Me</Link>
                                    <Link to="#projects" className='m-5 fw-bolder link' id='navbar-item'>Projects</Link>
                               
                                    <a href="" className="m-5 fw-bolder link" id='navbar-item'>Contact</a>
                                    <a href="" className="m-5 fw-bolder link" id='navbar-item'>Currículum</a>
                                </div>
                            </div>
                    </div>

                
        </nav>
    </> 
  )
}
