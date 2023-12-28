"use client";
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top shadow-sm bg-light">
                <div className="container-fluid justify-content-between">
        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className='w-100'>
                            <div className="d-flex justify-content-evenly align-items-center font-roboto p-2">
                                <div>
                                    <a href="" className='m-5 fw-bolder link' id='navbar-item'>About Me</a>
                                    <a href="" className='m-5 fw-bolder link' id='navbar-item'>Projects</a>
                                </div>
                                <div>
                                    <a className='fs-2 fs-bolder' id='navbar-item'>Ornella Bonachera</a>
                                </div>
                                <div>
                                    <a href="" className="m-5 fw-bolder link" id='navbar-item'>Contact</a>
                                    <a href="" className="m-5 fw-bolder link" id='navbar-item'>Currículum</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    </> 
  )
}
