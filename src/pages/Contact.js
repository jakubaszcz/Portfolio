function Contact() {
    return (
        <div>
            <div className="contact-container">
                <div className="contact-container-title">
                    <p className="contact-container-title-text">
                        Contact me !
                    </p>
                </div>
                <div className="contact-container-forms">
                    <p className="contact-container-form-mail-email-title">Your mail</p>
                    <input type="text" className="contact-container-form-mail-email" placeholder="Email Address"/>
                    <p className="contact-container-form-mail-object-title">Object</p>
                    <input type="text" className="contact-container-form-mail-object" placeholder='Email object'/>
                    <p className="contact-container-form-mail-message-title">Your message</p>
                    <input type="text" className="contact-container-form-mail-message" placeholder="Email Message"/>
                    <button className="contact_container-form-mail-send-button">
                        Send Mail
                    </button>
                </div>
                <div className="contact-container-network">
                    <i className="bi bi-discord"></i>
                    <i className="bi bi-microsoft-teams"></i>
                    <i className="bi bi-twitter-x"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-microsoft"></i>
                </div>
            </div>
        </div>
    );
}

export default Contact;
