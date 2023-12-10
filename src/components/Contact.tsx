export default function Contact(){
    return(
        <>
            <div className="bg-home-lightest p-5" id="#contact" style={{'height':'80vh'}}>
                <h1 className="font-alice text-center pt-4">Contacto</h1>
                <p className="text-center">En caso de que te interese contactarme, a continuación dejo mis datos.</p>
                <ul className="list-group list-unstyled d-flex align-items-center justify-content-center">
                    <li className="list-item">Email: obonachera@gmail.com</li>
                    <li className="list-item">Linkedin: <a href="">/obonachera</a></li>
                    <li className="list-item">Número Telefónico: +54 9 11 3565-8028</li>
                </ul>
            </div>
        </>
    )
}