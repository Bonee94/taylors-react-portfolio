import React from "react";
import "../styles/Projects.css";
import Images from "./Images";

export default function Projects({
  githubRepo,
  href,
  imgSrc,
  imgAlt,
  projTitle,
}) {
  return (
    <div className="work-tiles tiles">
      <a href={href}>
        <Images imgSrc={imgSrc} imgAlt={imgAlt} />
      </a>
      <div className="project-titles">
        <h2>
          <a href={href} className="project-title-link">
            {projTitle}
          </a>
        </h2>
        <h3>
          <a href={githubRepo}>Github Repo</a>
        </h3>
      </div>
    </div>
  );
}
