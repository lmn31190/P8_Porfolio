import { RiBookLine, RiTrophyLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card type={"works"} year={'01/2024 - Aujourd\'hui'} title={'Activité Freelance'} institution={'Développeur web '} />
                                    <Card type={"works"} year={'06/2024 - 07/2024'} title={'Mon vieux grimoire'} institution={'Développement d\'une api nodeJS'} />
                                    <Card type={"works"} year={'05/2024 - 06/2024'} title={'Kaza - Location d’appartements'} institution={'Développement d\'une application web ReactJS'} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Formation</h2>
                                    <Card type={"education"} year={'02/2024 - Aujourd\'hui'} title={'Diplôme bac +2 Développeur web'} institution={'OpenClassroom'} />
                                    <Card type={"education"} year={'2022 - 2023'} title={'Bootcamp Développeur web et web mobile'} institution={'WebForce 3'} />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution, type}) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    {type === "education" && <RiTrophyLine />}
                    {type === "works" && <RiBookLine />}
                    
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}