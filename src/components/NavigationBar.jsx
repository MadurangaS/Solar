import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/NavigationBar.css';
import logo from '../icon/sun.jpg';
import toggleIcon from '../icon/toggle_icon.png'; 

const NavigationBar = () => {
  const location = useLocation(); // Get the current location
  const [showNavbar, setShowNavbar] = useState(true);

  // Function to toggle the navigation bar
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the routes and their corresponding labels
  const routes = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/products', label: 'Products and Sales' },
    { path: '/performances', label: 'Performances and Efficiency' },
    { path: '/customers', label: 'Customer Details' },
    { path: '/feedbacks', label: 'Feedback' },
  ];

  return (
    <div>
      <div className={`nav-bar ${showNavbar ? 'show' : 'hide'}`}>
        <div className="app-header">
          <img src={logo} alt="Sun Icon" className="app-icon" />
          <h1>SUN SOLAR</h1>
        </div>
        <nav>
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`nav-tab ${
                location.pathname === route.path ? 'active' : ''
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      {!showNavbar && (
  <button className="toggle-button" onClick={toggleNavbar}>
    <img src={toggleIcon} alt="Toggle Icon" />
  </button>
)}
    </div>
  );
};

export default NavigationBar;
