import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './styles.css';

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