import Image from "next/image"

export default function Projects(){
    return(
        <>
            <div className="bg-home-lightest pt-5 p-3" id="#projects">
                <h1 className="text-center font-alice display-5 mb-4" id="#">Mis proyectos</h1>
                <div id="carouselExampleAutoplaying" className="carousel slide m-auto" data-bs-ride="carousel" style={{width:'40%'}}>
                <div className="carousel-inner">
                    <div className="carousel-item active d-flex align-items-center justify-content-center" style={{ width: '100%'}}>
                        <div className="card">
                            <Image alt="card-img" src={"https://img.freepik.com/free-photo/leaf-nature-backgrounds-pattern-illustration-plant-backdrop-design-abstract-vibrant-green-nature-wallpaper-illustration-generative-ai_188544-12680.jpg?w=1380&t=st=1702149738~exp=1702150338~hmac=d093de1f04d43ca60786e8fb4ed7e9f6f981025078f949031c6eb0d93dc0fc93"}/>
                            <div className="card-body">
                                <h5 className="card-title">To-Do App</h5>
                                <p className="card-text">To-Do App built on Next.js and React.js</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <div className="d-flex justify-content-between">
                                    <a className="btn btn-outline-dark">Go to project</a>
                                    <div>
                                        Stack:
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                        <Image alt="card-img" src={"https://img.freepik.com/free-photo/leaf-nature-backgrounds-pattern-illustration-plant-backdrop-design-abstract-vibrant-green-nature-wallpaper-illustration-generative-ai_188544-12680.jpg?w=1380&t=st=1702149738~exp=1702150338~hmac=d093de1f04d43ca60786e8fb4ed7e9f6f981025078f949031c6eb0d93dc0fc93"}/>
                        <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a className="btn btn-outline-dark">Go to project</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                        <Image alt="card-img" src={"https://img.freepik.com/free-photo/leaf-nature-backgrounds-pattern-illustration-plant-backdrop-design-abstract-vibrant-green-nature-wallpaper-illustration-generative-ai_188544-12680.jpg?w=1380&t=st=1702149738~exp=1702150338~hmac=d093de1f04d43ca60786e8fb4ed7e9f6f981025078f949031c6eb0d93dc0fc93"}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a className="btn btn-outline-dark">Go to project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </>
    )
}