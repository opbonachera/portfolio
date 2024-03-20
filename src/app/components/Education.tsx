import Link from "next/link"

const educationData = [
    {
        title: "Informatics engineering",
        company: "Universidad Nacional de La Matanza",
        date: 'March 2023 - Present',
    },
    {
        title: "English Certificate (C2 Proficient)",
        company: "EF",
        date: 'February 2024',
        url: 'https://cert.efset.org/xN74Tg'
    },
    {
        title: "Javascript Algorithms and Data Structures",
        company: "FreeCodeCamp",
        date: 'December 2023',
        url: 'https://www.freecodecamp.org/certification/obonachera/javascript-algorithms-and-data-structures'
    },
    {
        title: "Angular: De 0 a experto",
        company: "Udemy - Fernando Herrera",
        date: 'January 2024',
        url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e6e34d9e-2dd3-4251-91be-5216f1ed0987.jpg?v=1704987413000'
    },
    {
        title: "Angular 13",
        company: "Educacion IT",
        date: 'January 2024',
        url: 'https://www.educacionit.com/perfil/ornella-bonachera-951779/certificado/68448'
    },
    {
        title: "English UTN Certificate",
        company: "UTN",
        date: 'December 2021'
    },
    {
        title: "SQL: Basic to complex queries",
        company: "Udemy",
        date: 'July 2023',
        url: 'https://www.udemy.com/certificate/UC-264696bd-8224-4682-bb33-e13566f65ad5/'
    },
   
]

export const Education = () =>{
    return(
        <>
            
            <div id="ed-container" className="mb-5 d-flex flex-column align-items-center justify-content-center" style={{ height:'100%',minWidth: '350px', width: '100%'}}>
                <div className="w-75">
                    <h1 style={{ fontWeight: 900 }} className="display-2 mb-3"> Education
                    </h1>
                    <hr />
                </div>
                <div className="w-75">
                   {
                    educationData.map((e)=>{
                        return (
                            <div key={e.title} className="d-flex align-items-between justify-content-between">
                                <div>
                                    <p className="merriweather"><span className="fw-bold merriweather">{ e.title }</span> <small> ({ e.company }) </small>| Date: { e.date }</p>
                                    
                                </div>
                                <div>
                                    <p>{ e.url ? <Link target="_blank" href={e.url} className="text-dark">Certificate</Link> : null }</p>
                                </div>
                            </div>
                        )
                    })
                   }
                </div>
            </div>
            
        </>
    )
}