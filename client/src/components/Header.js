import React from "react";
import NavLinks from "./NavLinks";
import '../styles/Header.css'

function Header ({ setTransition, currentPage, handlePageChange }) {
    return (
    <header> 
        <div className="hdr-section-1">
            <h1 className="my-name-hdr">Taylor Turner</h1>
            <NavLinks currentPage={currentPage} setTransition={setTransition} handlePageChange={handlePageChange}/>
        </div>
    </header>
    );
}

export default Header;