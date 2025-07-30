import React, { useState } from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>YumGo</h3>
          <p>Email: support@yumgo.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Kochi, Kerala, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
