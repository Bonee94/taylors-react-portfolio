import React from 'react';
import profilePic from '../../assets/images/Taylor-profile-pic.png'

export default function About() {
  return (
    <div className='page-container'>
      <div className='page-card'>
      <h1>About Me</h1>
      <img className="profile-picture" src={profilePic} alt=""/>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mo llis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      </div>
    </div>
  );
}
