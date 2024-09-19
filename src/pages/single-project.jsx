import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { projectsData } from '../utlits/fackData/projectData';
const SingleProject = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    
      useEffect(() => {
        const projectId = parseInt(id); 
        const project = projectsData.find((project) => project.id === projectId); 
        if (project) {
          setData(project); 
        } else {
          setError(true); 
        }
      }, [id]);
    
      if (error) {
        return <p>Erreur : Projet non trouvé.</p>; 
      }
    
      if (!data) {
        return <p>Chargement...</p>; 
      }

    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <h1>{data.title}</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={data.src} alt="image" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>technologie</p>
                                <div className="icon-tech">{data.technologie.map((tech, index) => (
                                    <img key={index} src={tech} alt="" />
                                ))}</div>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{data.client}</h3>
                            </div>
                            <div className="single-info">
                                <p>Github</p>
                                <h3><a target="_blank" style={{color :"white", textDecoration : "underline"}} href={data.github}>Lien github</a></h3>
                            </div>
                            {data.project && <div className="single-info">
                                <p>Project</p>
                                <h3><a target="_blank" style={{color :"white", textDecoration : "underline"}} href={data.project}>Voir le projet</a></h3>
                            </div>}
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={data.img[0]} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={data.img[2]} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={data.img[3]} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={data.img[1]} alt="gallery" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject