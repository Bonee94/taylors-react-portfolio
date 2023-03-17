import React from "react";

const Images = ({ imgSrc, imgAlt }) => {
  switch (imgSrc) {
    case "parkLocator":
      return (
        <img src={require("../assets/images/national-park-locator.PNG")} alt={imgAlt} />
      );
    case "techBlog":
      return (
        <img src={require("../assets/images/tech-blog.PNG")} alt={imgAlt} />
      );
    case "weatherApp":
      return (
        <img src={require("../assets/images/weather-app.png")} alt={imgAlt} />
      );
    case "horiseon":
      return (
        <img src={require("../assets/images/Horiseon.png")} alt={imgAlt} />
      );
    case "JATE":
      return (
        <img src={require("../assets/images/jate-app.PNG")} alt={imgAlt} />
      );
    case "sbRealty":
      return (
        <img src={require("../assets/images/sb-realty.PNG")} alt={imgAlt} />
      );
      
      default: 
      return
  }
  
};

export default Images;
