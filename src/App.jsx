import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

// Import your page components
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Performances from './pages/Performances';
import Customers from './pages/Customers';
import Feedbacks from './pages/Feedbacks';



const App = () => {
  const companyFooter = "Your Company Name"; // Update the company name as needed

  return (
    <Router>
      <div className="app">
        <div className="nav-bar">
          <NavigationBar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/products" component={Products} />
            <Route path="/performances" component={Performances} />
            <Route path="/customers" component={Customers} />
            <Route path="/feedbacks" component={Feedbacks} />
          </Routes>
        </div>
        <div className="footer">{companyFooter}</div>
      </div>
    </Router>
  );
};

export default App;
