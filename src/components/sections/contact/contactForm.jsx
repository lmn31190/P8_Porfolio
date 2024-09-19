import { useRef, useState } from "react";
import { RiMailLine } from '@remixicon/react'
import SlideUp from '../../../utlits/animations/slideUp'
import emailjs from "@emailjs/browser";


const ContactForm = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission


        // Vérifie si les champs sont vides
        if (name.trim() === '' || email.trim() === '' || message.trim() === "") {
            setError(true)
            setSuccess(false);
            return;
        } else {
            emailjs
                .sendForm("service_idg1q8l", "template_0icb72m", formRef.current, {
                    publicKey: "_82jvMxd4JIVdZWmN",
                })
                .then(
                    () => {
                        setSuccess(true);
                        setError(false);
                    }
                ).catch(
                    () => {
                        setSuccess(false);
                        setError(true);

                    }
                )
        }
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form ref={formRef} onSubmit={handleSubmit} id="contactForm" className="contactForm" name="contactForm" action="assets/php/form-process.php" method="post">
                        <div className="row">
                            <div id="msgSubmit">
                                {success ? <p style={{ color: "green" }}>Message Envoyé</p> : ""}
                                {error && <p style={{ color: "red" }}>Tout les champs doivent être remplie</p>}
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input type="text" onChange={e => setName(e.target.value)} value={name} id="name" name="name" className="form-control" placeholder="Steve Milner" data-error="Please enter your Name" />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" placeholder="hello@websitename.com" data-error="Please enter your Email" />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Votre Message</label>
                                    <textarea name="message" id="message" className="form-control" onChange={e => setMessage(e.target.value)} value={message} rows="4" placeholder="Write Your message" data-error="Please Write your Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className={name.trim() === '' || email.trim() === '' || message.trim() === "" ? "disabled-btn" : "theme-btn"}>
                                        Envoyer <i><RiMailLine size={15} /></i>
                                    </button>


                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm