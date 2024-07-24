// src/components/Faculty.js
import React from 'eact';

const Faculty = () => {
  return (
    <div className="faculty">
      <h1>Faculty</h1>
      <div className="profiles">
        <div className="profile">
          <img src="placeholder.jpg" alt="John Doe" />
          <h2>John Doe</h2>
          <p>Principal, M.Ed, 20 years of experience in educational administration.</p>
        </div>
        <div className="profile">
          <img src="placeholder.jpg" alt="Jane Smith" />
          <h2>Jane Smith</h2>
          <p>English Teacher, B.A., 10 years of experience in teaching English literature.</p>
        </div>
        <div className="profile">
          <img src="placeholder.jpg" alt="Bob Johnson" />
          <h2>Bob Johnson</h2>
          <p>Math Teacher, B.Sc., 15 years of experience in teaching mathematics.</p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;