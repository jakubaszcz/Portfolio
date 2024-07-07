import Header from '../components/Header';
import Footer from '../components/Footer';

export default Home;

function Home() {
    return (
        <div>
            <Header/>
            <div className="home-main-container">
                <div className="home-main-container-text">
                    <p className="home-main-container-text-title">
                        Jakub Szczucinski
                    </p>
                    <p className="home-main-container-text-subtitle">
                        Student developer
                    </p>
                </div>
                <div className="home-main-container-box">
                    <a href="/contact" className="home-main-container-box-contact">
                        Contact
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
);
}
