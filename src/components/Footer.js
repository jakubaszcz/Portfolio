import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-container-information">
                <div className="footer-container-information-text">
                    <p>
                        Created by Jakub Szczucinski
                    </p>
                    <p>
                        Created using ReactJS
                    </p>
                </div>
                <div className="footer-container-information-copyright">
                    <p>
                        &#xA9; All right reserved | Jakub Szczucinski
                    </p>
                </div>
            </div>
            <div className="footer-container-network">
                <i className="bi bi-discord"></i>
                <i className="bi bi-microsoft"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-github"></i>
                <i className="bi bi-microsoft-teams"></i>
                <i className="bi bi-twitter-x"></i>
            </div>
        </div>
    );
}

export default Footer;
