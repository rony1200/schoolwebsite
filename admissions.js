// src/components/Admissions.js
import React from 'react';
import { useState } from 'react';

const Admissions = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="admissions">
      <h1>Admissions</h1>
      <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <div className="important-dates">
        <h2>Important Dates</h2>
        <ul>
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </label>
        <label>
          Phone:
          <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value })} />
        </label>
        <label>
          Message:
          <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value })} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admissions;