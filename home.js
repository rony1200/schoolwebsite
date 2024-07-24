// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Springdale Public School</h1>
      <p>Nurturing young minds for a brighter future.</p>
      <Carousel>
        <Carousel.Item>
          <img src="placeholder.jpg" alt="Annual Sports Day" />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="placeholder.jpg" alt="Science Exhibition" />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="placeholder.jpg" alt="Cultural Fest" />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="quick-links">
        <Link to="/about">About Us</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/students">Students</Link>
      </div>
    </div>
  );
};

export default Home;