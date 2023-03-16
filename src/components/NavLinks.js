import React from "react";
import '../styles/NavLinks.css'

function NavLinks ({ currentPage, handlePageChange }) {
    return (
        <ul className="hdr-nav-list">
            <li className="hdr-nav-items">
                <a href="#about" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link-active' : ''}>
                    About Me</a></li>
            <li className="hdr-nav-items">
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link-active' : ''}>
                    Portfolio</a></li>
            <li className="hdr-nav-items">
                <a href="#contact" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link-active' : ''}>
                    Contact</a></li>
            <li className="hdr-nav-items">
                <a href="#resume" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link-active' : ''}>
                    Resume</a></li>
        </ul>
    );
}

export default NavLinks;