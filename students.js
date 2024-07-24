// src/components/Students.js
import React from 'eact';

const Students = () => {
  return (
    <div className="students">
      <h1>Students</h1>
      <div className="activities">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>Debating Club</li>
          <li>Drama Club</li>
          <li>Sports Teams (Cricket, Basketball, Football)</li>
        </ul>
      </div>
      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>Winner of the Inter-School Debate Competition (2022)</li>
          <li>Runner-up in the State-Level Science Fair (2021)</li>
        </ul>
      </div>
    </div>
  );
};

export default Students;