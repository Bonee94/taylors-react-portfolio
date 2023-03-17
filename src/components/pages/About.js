import React from 'react';
import profilePic from '../../assets/images/Taylor-profile-pic.png'

export default function About() {
  return (
    <div className='page-container'>
      <div className='page-card'>
      <h1>About Me</h1>
      <img className="profile-picture" src={profilePic} alt=""/>
      <p>Hi, <br/> My name is Taylor Turner. I am a 29 year old, San Antonio living, Texan. I haven't lived here my whole life but I got here as soon as I could. Some hobbies of mine include guitar playing, motorcycle riding, finding a cool new spot to hangout and of course, drinking coffee!  <br/> <br/>  I am at the beginning of my developer journey as my time in UTSA's Coding Bootcamp is coming to a close. I've learned quite a few skills to prepare for some of crazy bugs and projects I may come across. But I will say one of the greatest things I've discovered is what a passion I have had hiding in all of the mind boggling projects I've encountered so far. Even as I am currently writing this, it is 4:12am and I have been up all night trying to accomplish my goal. It's so amazing!<br/><br/> This road will be a fun one for sure!  
      </p>
      </div>
    </div>
  );
}
