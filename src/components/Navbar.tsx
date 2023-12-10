"use client";
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-sm">
                <div className="container-fluid justify-content-between">
        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <div>
                                <h1 className="font-alice">Ornella</h1>
                            </div>
                            <div className="px-5">
                                <ul className="navbar-nav">
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link" to='#home' spy={true} smooth={true} duration={300}>Home</Link>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link" to='#about' spy={true} smooth={true} duration={300}>About</Link>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link" to='#projects' spy={true} smooth={true} duration={300}>Projects</Link>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link" to='#contact' spy={true} smooth={true} duration={300}>Contact</Link>
                                    </li>
                                    {/* <li className="nav-item fs-5">
                                        <Link className="nav-link" to='#about' spy={true} smooth={true} offset={50} duration={500}>About</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    </> 
  )
}
