import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
    return (
        <div className="header-container">
            <div className="header-container-home">
                <i className="bi bi-house-fill"></i>
            </div>
            <div className="header-container-list">
                <ul className="header-container-list-items">
                    <li>
                        <a href="/work">
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
