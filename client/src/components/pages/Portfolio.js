import React from 'react';
import '../../styles/Portfolio.css'
import Projects from '../Projects'
import projectsArr from '../../assets/projects/projectsArr';

export default function Portfolio() {
    //Gets separate list of projects held in another function
    const getProjects = projectsArr();
    getProjects.sort((a,b) => {return a.id - b.id});

    return (
    <div className='page-container'>
      <div className='page-card'>
            <h1>My Projects</h1>
            <h3>Click on images for deployed application</h3>
        <div className='flex-center'>
            {getProjects.map((project, index) => {
                return <Projects key={index} {...project}/>
            })}
        </div>
      </div>
    </div>
  );
}
