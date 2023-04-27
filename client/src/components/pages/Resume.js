import React, { useEffect } from 'react';
import '../../styles/Resume.css';
import Transition from '../Transition';

export default function Resume({transition, setTransition}) {

  useEffect(() => {
    setTransition(false)
  })

  const url =
    "/Taylor-Turner-Resume.pdf";
  
  return (
    <div className='page-container'>
      <div className='page-card'>
      <Transition transition={transition}/> 
        <div className='resume-hdr'>
        <h1>Resume</h1>
        <h2>Click to download my <button id="resume-submit" onClick={() => {
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
        </div>
        
        <section className="resume-container">
          <h1 id='my-name'>Taylor Brendon Eugene Turner</h1>
          <div className="resume-box-side">
            <h2 className="underline">Contact</h2>
            <ul className="no-dec-list">
              <li><a href="tel:210-363-5213">210-363-5213</a></li>
              <li><a href="mailto:Turner.Taylor.BE@gmail.com">Turner.Taylor.BE@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/taylor-turner-44377426a/">LinkedIn</a></li>
            </ul>
          </div>
          <div className="resume-box-side">
            <h2 className="underline">Education</h2>
            <ul className="no-dec-list">
              <li><h3>UTSA Coding Bootcamp (October 2022 - April 2023)</h3>
                      Learned Express, Node.js, JavaScript, MySQL, MongoDB, React, HTML, and CSS</li>
                      <br/>
              <li><h3>High School Diploma (May 2012)</h3>
                      Homeschooled, San Antonio, TX</li>
            </ul>
          </div>
          <div className="resume-box-center">
            <h2 className="underline">Skills</h2>
            <ul className="square-list">
              <li>Proficient in HTML, CSS, JavaScript, Handlebars, React</li>
              <li>Experienced with Express, Node.js, SQL, and MongoDB</li>
              <li>Practiced in Git version control</li>
              <li>Strong problem-solving and critical thinking skills</li>
              <li>Excellent attention to detail and ability to work independently or as part of a team</li>
            </ul>
          </div>
          <div className="resume-box-center">
            <h2 className="underline">Experience</h2>            
            <ul className="no-dec-list">
              <li><h3>Lead Refinisher</h3></li>
              <li><h4>Biggin's Door Refinishing, March 2015 - Present</h4></li>
              <ul className="square-list">
                <li>Supervised a crew of up to 3 employees, ensuring timely and quality completion of projects</li>
                <li>Handled customer communications, including first contact and job preparations</li>
                <li>Maintained an organized and efficient work environment</li>
                <li>Developed and implemented procedures for employees, resulting in increased productivity and quality of work</li>
              </ul>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
