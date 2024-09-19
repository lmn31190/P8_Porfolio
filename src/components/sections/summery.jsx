import React from 'react'
import profile from "../../assets/images/about/profile.svg"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import { Link } from 'react-router-dom'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>

                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    Je suis Louis un développeur web.
                                </h2>
                                <p>Je suis développeur freelance spécialisé dans la création d'applications web complètes et performantes.</p>
                                <p>Avec plusieurs projet dans le développement full-stack, je combine passion et expertise pour offrir des solutions adaptées à vos besoins. Mon objectif est simple : concevoir des projets qui vous ressemblent, avec une approche collaborative et transparente. Que vous soyez une start-up, une entreprise établie ou un particulier, je suis ici pour vous accompagner à chaque étape, du concept à la réalisation.</p>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">Me contacter<i> <RiMailSendLine size={16} /> </i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summery