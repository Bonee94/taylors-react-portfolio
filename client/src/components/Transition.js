import React, { useEffect, useState } from "react";
import "../styles/Transition.scss";

export default function Transition({transition}) {

  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHidden(true)
    }, 1000);
  })

  return (
        <div className={
          transition ? "overlay show" : 
          hidden ? "overlay hidden" : "overlay" }>
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
