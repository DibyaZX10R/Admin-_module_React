import React from 'react';
import { Link } from 'react-router-dom';
import "./Side.css";

const Side = ({ onMenuItemClick }) => {
  return (
    <div>
      <div className="sidebar-container" id="sidebar">
        <div className="toggle-icon">
          <i className="fas fa-bars"></i>
        </div>
        <ul className="menu-container" id="maincontent">
        {/* <li className="menu-item active ">
            <Link to={`/Login`} className="menu-link" onClick={() => onMenuItemClick('Login')}>
              <i className="fas fa-tachometer-alt"></i><span>Login</span>
            </Link>
          </li> */}
          <li className="menu-item active ">
            <Link to={`/dashboard`} className="menu-link" onClick={() => onMenuItemClick('Dashboard')}>
              <i className="fas fa-tachometer-alt"></i><span>Dashboard</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`/Project`} className="menu-link" onClick={() => onMenuItemClick('Project Master')}>
              <i className="fas fa-project-diagram"></i><span>Project Master</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`/Allocation`} className="menu-link" onClick={() => onMenuItemClick('Employee Allocation')}>
              <i className="fas fa-user"></i><span>Employee Allocation</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`/Bench`} className="menu-link" onClick={() => onMenuItemClick('Bench Employees')}>
              <i className="fas fa-user-clock"></i><span>Bench Employees</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`/History_main`} className="menu-link" onClick={() => onMenuItemClick('History')}>
              <i className="fas fa-history"></i><span>History</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`/Time`} className="menu-link" onClick={() => onMenuItemClick(' My Timesheet')}>
              <i className="fas fa-clock"></i><span>My Timesheet</span>
            </Link>
          </li>
        </ul>
        <div className="sign-out-container">
          <Link to={`/`}>
          <button  className="sign-out-button">Sign Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Side;
