"use client";
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-sm" id='navbar'>
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="d-flex align-items-end justify-content-center dark w-100 p-2">
                                <div>
                                    <Link to="#about" href="" className='m-5 link-nav' id='navbar-item'>About Me</Link>
                                    <Link to="#" className='m-5 link-nav' id='navbar-item'>Projects</Link>
                                    <Link to="#contact" className='m-5 link-nav' id='navbar-item'>Contact</Link>
                                    <a className="text-decoration-none text-dark link-nav" id="navbar-item" target="blank" href='pdf/cvenglish.pdf' download>Curriculum</a>
                                </div>
                            </div>
                    </div>

                
        </nav>
    </> 
  )
}
