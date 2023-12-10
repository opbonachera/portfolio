"use client";
import { Link } from 'react-scroll';

import Image from 'next/image';
export default function Main() {
  return (
    <>
      <div style={{height:'100vh'}} className="bg-home mb-0" id='#home'>
            <div className="row h-100 m-0">
                {/* <div className="col-6 d-flex align-items-center justify-content-center">
                    <div>
                        <Image src='/./profile.jpeg' alt='profile' width={500} height={500} ></Image>
                    </div>
                </div> */}
                <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                        <p className="display-1 font-alice">Ornella Bonachera</p>
                        <p className="fs-5">Estudiante de ingenieria en informática y desarrolladora fullstack.</p>
                        
                        <button className="btn btn-outline-dark mt-3 font-cursive">
                            <Link className="nav-link" to='#projects' spy={true} smooth={true} duration={300}>Projects</Link>
                        </button>
                        
                </div>
            </div> 
      </div>
    </> 
  )
}
