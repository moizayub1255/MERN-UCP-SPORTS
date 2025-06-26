import React from 'react';
import "../Styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="pictures-section">
    <h2>Meet the Team</h2>
    <div className="pictures-container">
      <div className="picture-card">
        <img 
          src="moiz.jpeg" 
          alt="Person 1" 
          className="picture" 
        />
        <p className="name">Moiz</p>
        <p >BSCS-7B</p>
      </div>
      
      <div className="picture-card">
        <img 
          src="zawar.jpg" 
          alt="Person 2" 
          className="picture" 
        />
        <p className="name">Zawar </p>
        <p >BSCS-7B</p>
      </div>
      {/* <div className="picture-card">
        <img 
          src="shoaib.jpeg" 
          alt="Person 2" 
          className="picture" 
        />
        <p className="name">Shoaib </p>
        <p >BSCS-7B</p>
      </div> */}
    </div>
  </div>
  );
};

export default AboutMe;
