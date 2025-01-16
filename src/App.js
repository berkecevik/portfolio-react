import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <HeroSection />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;