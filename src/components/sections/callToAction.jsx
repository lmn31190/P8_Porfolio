import { Link } from 'react-router-dom'
import { RiCupFill } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>Une idéé ? Un projet ?</h2>
                                <p>Contactez-nous et faisons en sorte qu'il se réalise ✨. Je suis également disponible pour des opportunités à temps plein ou à temps partiel afin de de réaliser un travail exceptionnel.</p>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">Discutons ensemble  <i><RiCupFill size={16} /></i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction