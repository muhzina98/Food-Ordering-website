import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About YumGo</h1>
        <p>Delivering delicious food to your doorstep — fast, fresh, and affordable.</p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At YumGo, we believe in making food delivery effortless and enjoyable.
          Whether you're craving a quick snack or a full meal, we connect you with
          your favorite restaurants and dishes in just a few taps.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🍔 Vast menu options from top-rated restaurants</li>
          <li>🚀 Fast delivery across the city</li>
          <li>💰 Exclusive offers and discounts</li>
          <li>📦 Live tracking and secure payments</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <p>
          We're a passionate group of developers, food lovers, and logistics experts
          committed to creating the best food delivery experience in India.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
