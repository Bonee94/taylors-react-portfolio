import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import Images from "./Images";

export default function Projects({
  githubRepo,
  href,
  imgSrc,
  imgAlt,
  projTitle,
  info,
}) {
  const paraRef = useRef()

  useEffect(() => {
    if (info) {
      paraRef.current.innerHTML = info
    }
  }, [info])


  return (
    <div className="work-tiles tiles">
      <a href={href}>
        <div className="img-wrapper">
          <Images imgSrc={imgSrc} imgAlt={imgAlt} />
        </div>
      </a>
      <p ref={paraRef} className="info-p"></p>
      <div className="project-titles">
        <h2>
          <a href={href} className="project-title-link">
            {projTitle}
          </a>
        </h2>
        {githubRepo && (
          <h3>
            <a href={githubRepo}>Github Repo</a>
          </h3>
        )}
      </div>
    </div>
  );
}
