import React, { useEffect } from "react";
import profilePic from "../../assets/images/Taylor-profile-pic.png";
import "../../styles/About.css";
import Transition from '../Transition';


export default function About({transition, setTransition}) {

  useEffect(() => {
    setTransition(false)
  })

  return (
    <div className="page-container">
      <div className="page-card">
      <Transition transition={transition}/> 
        <h1>About Me</h1>
        <section className="profile-section">
          <img className="profile-picture" src={profilePic} alt="" />
          <p>
            Taylor is a recent coding boot camp graduate from UTSA who is eager to break into the tech industry. 
            He has a strong understanding of HTML, CSS JavaScript, Handlebars, SQL, MongoDB, React, Express and Node JS, enabling 
            him o work with the full MERN Stack. With his drive and determination, Taylor is confident that he can quickly 
            become a valuable asset to any development team.
          </p>
          <p>
            In his free time, Taylor enjoys playing the guitar, hiking, and traveling. He loves exploring new places and
            cultures, which allows him to bring a unique perspective to his work. Taylor is passionate about technology 
            and looks forward to taking on new challenges in the field. With his technical expertise, Taylor is looking to enter 
            a position that will him to learn, grow, and make an impact.
          </p>
        </section>
      </div>
    </div>
  );
}
