export default function Contact(){
    const date = new Date;
    return (
        <>
            <div id="#contact" className="pt-5 d-flex justify-content-center flex-column" style={{ height:'100vh'}}>
                <div className="mt-5 px-5">
                    <h5 className='text-center display-6 fw-bolder mt-5'>I am open to work!</h5>
                    <p className="text-center fs-4">If you are interested in working with me or learning more... you can contact me here: </p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="p-5" style={{width:'50rem'}}>
                        <div className="col-12 bg-dark my-2 text-white text-center p-4 fs-4 rounded d-flex align-items-center">
                            <img src="/icons/linkedin.png" alt="" id="contact-icon" />
                            Linkedin: /obonachera
                        </div>
                        <div className="col-12 bg-dark my-2 text-white text-center p-4 fs-4 rounded d-flex align-items-center">
                            <img src="/icons/github.png" alt="" id="contact-icon" />
                            Github: /obonachera
                        </div>
                        <div className="col-12 bg-dark my-2 text-white text-center p-4 fs-4 rounded d-flex align-items-center">
                            <img src="/icons/email.png" alt="" id="contact-icon" />
                            Email: obonachera@gmail.com
                        </div>
                        <div className="col-12 bg-dark my-2 text-white text-center p-4 fs-4 rounded d-flex align-items-center">
                            <img src="/icons/whatsapp.png" alt="" id="contact-icon" />
                            Phone number: +54 9 11 3565-8028
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
