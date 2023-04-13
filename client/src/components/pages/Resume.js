import React, { useEffect } from 'react';
import '../../styles/Resume.css';
import Transition from '../Transition';

export default function Resume({transition, setTransition}) {

  useEffect(() => {
    setTransition(false)
  })

  const url =
    "https://taylor-turners-portfolio.herokuapp.com/resume.pdf";
  
  return (
    <div className='page-container'>
      <div className='page-card'>
      <Transition transition={transition}/> 
        <h1>Resume</h1>
        <h2 id='resume-download-hdr'>Click to download my <button id="resume-submit" onClick={() => {
            fetch(url)
            .then((response) => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'Taylor-Turner-Resume.pdf';
                    alink.click();
                })}) 
        
            }}>Resume</button></h2>
        

            <div className='prof-box'>
              <div className='prof-section'>
                <h2>Front-end Proficiencies</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>Responsive Design</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className='prof-section'>
                <h2>Back-end Proficiencies</h2>
                <ul>
                  <li>APIs</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB, Mongoose</li>
                  <li>REST</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
      </div>
    </div>
  );
}
