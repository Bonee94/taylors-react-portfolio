import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // this is checking the value of current page state and returning the proper page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
