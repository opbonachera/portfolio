import CodeIcon from '@mui/icons-material/Code';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';

const ProjectCard = ({ title, desc, stack, github, url}:{ title:string, desc:string, stack: string[], github:string, url?:string}) =>{
    return(
        <div className='row pt-3 merriweather'>
                        <div className='col-11'>
                        <p className="merriweather" style={{ fontWeight: 900 }}>{ title }</p>
                            <p className='w-100 merriweather'>{ desc }</p>
                        </div>
                        <div className="col-1 d-flex align-items-center">
                            <Link target="_blank" className="text-dark" href={github}><CodeIcon></CodeIcon></Link>
                            { url ? <Link target="_blank" href={url} className="text-dark"><OpenInNewIcon></OpenInNewIcon></Link> : null }
                            
                        </div>
                        <div className='col-12'>
                        <div className="row">
                            {
                                stack.map((e,index)=><div key={index} className="stack-tag col">{e}</div>)
                            }
                        </div>
                        </div>
                    </div>
    )
}

const projectData = [
    {
        title: 'Country Information Search',
        description: 'The Country Information Search web application is a user-friendly tool built using Angular and TypeScript that allows users to explore information about countries from all over the world. With a simple and intuitive interface, users can easily search for countries based on their name, region, or capital city.',
        stack: ["Angular", "Typescript", "PrimeNG", "RXJS", "HTTP", "API Rest"],
        gitHub: 'https://github.com/opbonachera/countries-app',
        url: 'https://countries-app-lac-alpha.vercel.app/'
    },
    {
        title: 'Psy Net',
        description: 'This project stands as an expansive network facilitating a psychology platform, providing seamless management of appointments and user registrations. While prioritizing functionality, intricate design aspects were intentionally deferred.',
        stack: ["Angular", "Typescript", "PrimeNG", "RXJS", "HTTP", "MongoDB", "NodeJS", "NestJS", "JWT"],
        gitHub: 'https://github.com/opbonachera/psy-net'
    },
]

export const Projects  = () => {
    return (
        <>
            <div  id="proj-container" className="" style={{ height:'100%',minWidth: '350px', width: '100%'}}>
                <div className="w-75">
                    <h1 style={{ fontWeight: 900 }} className="display-2">Projects</h1>
                    <hr />
                </div>

                <div className='w-75 merriweather'  id='project-card'>
                    
                    {
                        projectData.map((e,i)=>
                            <ProjectCard 
                                title={e.title}
                                stack={e.stack}
                                desc={e.description}
                                github={e.gitHub} 
                                url={e.url} 
                                key={i}/>)
                    }

                    
                </div>
            
            </div>
        </>
    ) 
}