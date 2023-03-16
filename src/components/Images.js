import React from "react";

const Images = ({ imgSrc, imgAlt }) => {
  switch (imgSrc) {
    case "parkLocator":
      return (
        <img src={require("../assets/images/nature-bg.webp")} alt={imgAlt} />
      );
    case "horiseon":
      return (
        <img src={require("../assets/images/Horiseon.png")} alt={imgAlt} />
      );
    case "fistBump":
      return (
        <img src={require("../assets/images/fist-bump.jpg")} alt={imgAlt} />
      );
    case "tree":
      return (
        <img src={require("../assets/images/tree-bg.webp")} alt={imgAlt} />
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
