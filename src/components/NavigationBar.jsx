// src/components/NavigationBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/NavigationBar.css';
import logo from '../icon/sun.jpg';

const NavigationBar = () => {
  const location = useLocation(); // Get the current location

  // Define the routes and their corresponding labels
  const routes = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/products', label: 'Products and Sales' },
    { path: '/performances', label: 'Performances and Efficiency' },
    { path: '/customers', label: 'Customer Details' },
    { path: '/feedbacks', label: 'Feedback' },
  ];

  return (
    <div className="nav-bar">
      <div className="app-header">
        <img src={logo} alt="Sun Icon" className="app-icon" />
        <h1>SUN SOLAR</h1>
      </div>
      <nav>
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={`nav-tab ${location.pathname === route.path ? 'active' : ''}`}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavigationBar;