
export default function Footer(){
    const date = new Date()
    return(
        <>
            <hr />
            <div className="d-flex flex-column align-items-center justify-content-center home-box-2" style={{'height':'25vh'}}>
                <p className="4">{ date.getFullYear() } All rights reserved. | Built on Next.js by Ornella Bonachera</p>
            </div>
        </>

    )
}