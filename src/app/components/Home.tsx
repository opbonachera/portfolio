import Image from "next/image"
import Link from "next/link";
import girlImage from '../public/image.png';

export const Home = () =>{
    return(
        <>
            <div style={{ width: '100%', height:'100%'}} className="d-flex align-items-center justify-content-center flex-column">
                <h1 className="" id="home-title">Hello! I am Ornella.</h1>
                <p className="w-75 text-center merriweather">I am an Informatics Engineering Student and I also work in the tech industry since March 2023 as a Web Developer.</p>
                <div style={{ width:'7rem' }} className="d-flex mb-3 justify-content-between">
                    <Image className="icon-img" src="/svg/linkedin.png" alt="linkedin" width={100} height={100}></Image>
                    <Image className="icon-img" src="/svg/email.png" alt="linkedin" width={100} height={100}></Image>
                    <Image className="icon-img" src="/svg/github.png" alt="linkedin" width={100} height={100}></Image>
                </div>
                <Image src={girlImage} className="home-image" width={100} height={100} alt="Girl working" />
                <Link href="/" className="text-decoration-none text-black fs-5 fw-bolder mt-3">Download my CV</Link>
            </div>
        </>
    )
}