import React from "react";
import NavLinks from "./NavLinks";

function Header ({ currentPage, handlePageChange }) {
    return (
    <header>
        <div className="hdr-section-1">
            <h1 className="my-name-hdr">Taylor Turner</h1>
            <NavLinks currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
        <div>
            <img className="hdr-banner-img" src="./assets/images/Screenshot 2022-10-21 223902.png" alt=""/>
            <img className="profile-picture" src="./assets/images/Taylor-profile-pic.png" alt=""/>
        </div>
        <div className="subtitle-container">
            <h2 className="subtitle">Cool subtitle here!</h2>
        </div>
    </header>
    );
}

export default Header;