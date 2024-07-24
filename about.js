// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      <p>Our vision is to create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      <p>Our mission is to empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      <div className="infrastructure">
        <h2>Infrastructure and Facilities</h2>
        <ul>
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </div>
    </div>
  );
};

export default About;