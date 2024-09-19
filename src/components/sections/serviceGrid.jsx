import { RiPantoneFill, RiReactjsLine, RiNodejsLine, RiOrganizationChart, RiDatabase2Line, RiBardFill } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Mon savoir à votre Service</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiReactjsLine size={60} />} title={"React JS"} description={"Développez des interfaces utilisateurs dynamiques et réactives avec React JS."} />
                        <Card id={2} icon={<RiNodejsLine size={60} />} title={"Node JS"} description={"Développez des backends rapides et scalables avec Node pour vos applications web."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Fullstack Website"} description={"Concevez des sites complets, esthétiques et fonctionnels, du frontend au backend."} />
                        <Card id={1} icon={<RiOrganizationChart size={60} />} title={"Gestion de projet AGILE"} description={"Boostez vos projets avec Agile pour une gestion flexible et des livrables rapides."} />
                        <Card id={2} icon={<RiDatabase2Line size={60} />} title={"MERN Web App"} description={"Créez des applications web modernes avec la stack MERN, adaptées à vos besoins."} />
                        <Card id={3} icon={<RiBardFill size={60} />} title={"Référencement"} description={"Optimisez la performance et la visibilité de votre site avec SEO et techniques web."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-20">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}