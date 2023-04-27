import React, { useState, useEffect } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import '../styles/PortfolioContainer.css'
import Footer from './Footer';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  const [transition, setTransition] = useState(Boolean)
  const [animLight, setAnimLight] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // this is checking the value of current page state and returning the proper page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About setTransition={setTransition} transition={transition}/>;
    };
    if (currentPage === 'Portfolio') {
      return <Portfolio setTransition={setTransition} transition={transition}/>;
    }
    if (currentPage === 'Contact') {
      return <Contact setTransition={setTransition} transition={transition}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume setTransition={setTransition} transition={transition}/>;
    }
  };

  const handlePageChange = async (page) => {
    setCurrentPage('')
    setCurrentPage(page)
  };

  return (
    <div>
      <Header currentPage={currentPage} setTransition={setTransition} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer setAnimLight={setAnimLight} animLight={animLight}/>
    </div>
  );
}
