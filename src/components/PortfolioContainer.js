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

  useEffect(() => {
      window.scrollTo(0, 0);
  });

  // this is checking the value of current page state and returning the proper page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    };
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = async (page) => {
    await setCurrentPage('')
    setCurrentPage(page)
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}
