import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Home = () => (
  <div className = "home-container">
    <h1>Welcome to Our Site!</h1>
    <Link to="/register" className="btn btn-primary mt-3">Register</Link>
  </div>
);

export default Home;
