import { Link } from 'react-router-dom';
import ContactForm from './ContactForm.js';
const ContactUs = () => {
    return(


        
        <div className="contact-us">
            <div className="contact-us-hero">
                <div className="hero-text">
                    Get In Touch
                </div>
                <div className="hero-sub-text">
                    We’re ready to accelerate your digital marketing success
                </div>
            </div>
            <div className="title-and-text">
                <h3>Sales and General Inquiries</h3>
                <p> Phone: 206.247.4308</p>
                <h3>Hours</h3>
                <p>Monday - Friday:</p>
                <p>8:00am PST - 6:00pm PST</p>
                
            </div>
            <div className="contactFormAndInfo">     
                    <div className="contactForm">
                        <ContactForm />
                    </div>
                </div>
                <div className="contactFormAndInfoBreakpoint">  
                    <div className="contactFormBP">
                        <ContactForm />
                    </div>
                </div>
        </div>
    )
}

export default ContactUs;