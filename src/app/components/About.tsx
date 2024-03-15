import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export const About = () => {
    return(
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ height:'100%',minWidth: '350px', width: '100%'}}>
                <div className="w-75">
                    <h1 style={{ fontWeight: 900 }} className="display-2 mb-3">About me <AutoAwesomeIcon></AutoAwesomeIcon>
                    </h1>
                    <hr />
                </div>
                <div className="w-75">
                    <p className="merriweather">Driven by my passion for technology, I work as a web developer while I study Informatics Engineering at Universidad Nacional de La Matanza. This has given me the opportunity to gain tools that help me tackle any problem using software development, not focusing solely on technologies but more on integral solutions.</p>
                </div>
                <div className="w-75">
                    <p className="merriweather">I leverage good communication and interpersonal skills to collaborate effectively within teams, demonstrating leadership qualities when necessary. My strong work ethic, adept time management, and dedication to teamwork ensure efficient project delivery and exceed expectations.</p>
                    
                </div>
            </div>
        </>
    )
}