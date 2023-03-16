import React from "react";
import "../styles/Projects.css";
import Images from "./Images";

export default function Projects({
  githubRepo,
  href,
  imgSrc,
  imgAlt,
  projTitle,
  tileSize,
}) {
  if (tileSize === "Small") {
    return (
      <div className="small-work-tiles tiles">
        <a href={href}>
          <Images imgSrc={imgSrc} imgAlt={imgAlt} />
        </a>
        <div className="project-titles">
            <h2>{projTitle}</h2>
            <h3>
            <a href={githubRepo}>Github Project Repo</a>
            </h3>
        </div>
      </div>
    );
  }

  if (tileSize === "Big") {
    return (
      <div className="big-work-tiles tiles">
        <a href={href}>
          <Images imgSrc={imgSrc} imgAlt={imgAlt} />
        </a>
        <div className="project-titles">
            <h1>{projTitle}</h1>
            <h3>
            <a href={githubRepo}>Github Project Repo</a>
            </h3>
        </div>
      </div>
    );
  }
}
