import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Services from './components/services';
import NaturalDiamond from './components/naturalDiamond';
import DiamondJewellery from './components/diamondJewellery';
import LabCreatedDiamond from './components/labCreatedDiamond';
// import AnimatedCursor from 'react-animated-cursor';

function App() {
    return (
        <Router>
            <Header/>
            {/* <AnimatedCursor color='193, 11, 111' outerAlpha={0.2} /> */}
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                    <Route exact path="/services" element={<Services />}></Route>
                    <Route exact path="/natural-diamond" element={<NaturalDiamond />}></Route>
                    <Route exact path="/lab-created-diamond" element={<LabCreatedDiamond />}></Route>
                    <Route exact path="/jewellery" element={<DiamondJewellery />}></Route>
                    <Route exact path="/*" element={<Navigate to="/"/>}></Route>
                </Routes>
            <Footer/>
            {/* <Loader/> */}
        </Router>
    );
}

export default App;
