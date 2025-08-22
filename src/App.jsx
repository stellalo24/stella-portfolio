import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Projects from "./pages/ProjectsPage/Projects";
import Gallery from "./pages/GalleryPage/Gallery";
import Contact from "./pages/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  const [page, setPage] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header 
        setPage={setPage} 
        isOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main id="main-content" className="main-content">
        {page === "/" && <Home setPage={setPage} />}
        {page === "/About" && <About />}
        {page === "/Projects" && <Projects />}
        {page === "/Gallery" && <Gallery />}
        {page === "/Contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
