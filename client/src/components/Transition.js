import React from "react";
import "../styles/Transition.scss";

export default function Transition({transition}) {

  return (
        <div className={transition ? "overlay show" : "overlay"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
  );
}
