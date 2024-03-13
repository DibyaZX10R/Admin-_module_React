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
          <li className="menu-item active ">
            <Link to={`/`} className="menu-link" onClick={() => onMenuItemClick(' Dashboard')}>
              <i className="fas fa-tachometer-alt"></i><span>Dashboard</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`/Project`} className="menu-link" onClick={() => onMenuItemClick(' Project Master')}>
              <i className="fas fa-project-diagram"></i><span>Project Master</span>
            </Link>
          </li>
		  <li class="menu-item"><Link to={`/Allocation`} class="menu-link" onClick={() => onMenuItemClick('Employee Allocation')}>
					<i class="fas fa-user"></i><span>Employee Allocation</span></Link></li>
			<li class="menu-item"><Link to={`/Bench`} class="menu-link" onClick={() => onMenuItemClick(' Bench Employees')}>
					<i class="fas fa-user-clock"></i><span>Bench Employees</span></Link></li>
			<li class="menu-item "><Link to={`/History_main`} class="menu-link" onClick={() => onMenuItemClick(' History')}>
					<i class="fas fa-history"></i><span>History</span></Link></li>
			<li class="menu-item"><Link to={`/Time`} class="menu-link" onClick={() => onMenuItemClick(' Timesheet')}>
					<i class="fas fa-clock"></i><span>Timesheet</span></Link></li>
          {/* Add other menu items */}
        </ul>
      </div>
    </div>
  );
};

export default Side;
