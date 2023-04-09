import React, { useState, useEffect } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import '../styles/PortfolioContainer.css'
import Footer from './Footer';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Modal from './Modal';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Contact');
  const [modalOn, setModalOn] = useState(false);

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
      return <Contact setModalOn={setModalOn}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = async (page) => {
    setCurrentPage('')
    setCurrentPage(page)
  };

  return (
    <div>
      {modalOn ? <Modal/> : null}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}
