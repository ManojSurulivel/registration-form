import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container text-center mt-5 bg-color-white">
    <h1>Welcome to Our Site!</h1>
    <Link to="/register" className="btn btn-primary mt-3">Register</Link>
  </div>
);

export default Home;
