import Home from './pages/Home';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/work" element={<Work />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
