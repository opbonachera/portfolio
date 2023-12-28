"use client";
import { Link } from 'react-scroll';

import Image from 'next/image';
export default function Main() {
  return (
    <>
      <div style={{height:'70vh'}} className="mb-0" id='#home'>
            <div className="row h-100 m-0">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                        <p className="display-5 w-75 text-center" id='home-title'>JUNIOR WEB DEVELOPER <br />AND INFORMATICS ENGINEERING STUDENT</p>
                        
                        
                        <button className="btn btn-outline-dark bg-dark text-white mt-3 font-roboto">
                            <Link className="nav-link " to='#projects' spy={true} smooth={true} duration={300}>See Projects</Link>
                        </button>
                        
                </div>
            </div> 
      </div>
    </> 
  )
}
