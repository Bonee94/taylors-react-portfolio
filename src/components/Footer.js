import React from "react";
import "../styles/Footer.css";

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer>
      <div className="icons-container">
        <a
          key="icon1"
          href="https://www.linkedin.com/in/taylor-turner-44377426a/"
        >
            <i className="fa fa-linkedin"></i>
        </a>
        <a
          key="icon2"
          href="https://www.linkedin.com/in/taylor-turner-44377426a/"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          key="icon3"
          href="https://www.linkedin.com/in/taylor-turner-44377426a/"
        >
          <i class="fa fa-stack-overflow"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
