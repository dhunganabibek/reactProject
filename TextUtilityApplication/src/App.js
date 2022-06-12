import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Body from './Body/Body'
import About from './About/About'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
    return ( < >
    <Router>
        <Header title="Text Utility" />
        
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/" element={<Body />} />
            </Routes>
        
        <Footer />
    </Router>
        </> 
    );
}
export default App;