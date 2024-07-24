// src/components/Contact.js
import React from 'eact';
import { useState } from 'eact';

const Contact = () => {
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
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with us for any queries or feedback.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value })} />
        </label>
        <label>
          Phone:
          <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value })} />
        </label>
        <label>
          Message:
          <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value })} />
        </label>
        <button type="submit">Send</button>
      </form>
      <div className="address">
        <h2>Address</h2>
        <p>Springdale Public School</p>
        <p>123, Main Street, Anytown, USA</p>
        <p>Phone: 555-555-5555</p>
        <p>Email: [info@springdalepublicschool.edu](mailto:info@springdalepublicschool.edu)</p>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="300"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;