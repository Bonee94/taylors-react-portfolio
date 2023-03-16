import React from 'react';
import '../../styles/Portfolio.css'
import Projects from '../Projects'
import projectsArr from '../../assets/projects/projectsArr';

export default function Portfolio() {
    //Gets separate list of projects held in another function
    const getProjects = projectsArr();

    return (
    <div className='page-container'>
      <div className='page-card'>
        <div className='flex-center'>
            <h1>My Projects</h1>
            {getProjects.map((project, index) => {
                return <Projects key={index} {...project}/>
            })}
        </div>
      </div>
    </div>
  );
}
