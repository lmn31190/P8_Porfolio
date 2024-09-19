import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/about/profile.svg"
import react from "../../assets/images/client-logos/react.svg"
import node from "../../assets/images/client-logos/node.svg"
import agile from "../../assets/images/client-logos/agile.svg"
import mongo from "../../assets/images/client-logos/mongo.svg"
import sass from "../../assets/images/client-logos/sass.svg"
import typescript from "../../assets/images/client-logos/typescript.svg"
import SlideUp from '../../utlits/animations/slideUp';
import cv from "../../assets/CV.pdf"

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2>Louis Monie</h2>
                                <p>Je suis développeur web basé à Toulouse.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link to="https://www.linkedin.com/in/louismonie/" target="_blank" rel="noopener noreferrer"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link to="https://github.com/lmn31190" target="_blank" rel="noopener noreferrer"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Bonjour !</p>
                                <h2>
                                Je suis Louis, développeur freelance spécialisé dans la création d’applications web sur mesure.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Disponible en freelance</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a href={cv} target='_blank' className="theme-btn">Télécharger mon CV <i><RiDownloadLine size={16} /></i> </a>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Mes compétences</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                <img src={react} alt="" />
                                                <img src={node} alt="" />
                                                <img src={agile} alt="" />
                                                <img src={mongo} alt="" />
                                                <img src={sass} alt="" />
                                                <img src={typescript} alt="" />
                                            </Marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero