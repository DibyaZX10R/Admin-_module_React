import React from 'react'
import { Link } from 'react-router-dom'
import "./Side.css"

const Side = () => {
  return (
    <div>
      <div class="sidebar-container" id="sidebar">
		<div class="toggle-icon">
			<i class="fas fa-bars"></i>
		</div>
		<ul class="menu-container" id="maincontent">
			<li class="menu-item active "><Link to={`/`} class="menu-link">
					<i class="fas fa-tachometer-alt"></i><span>Dashboard</span></Link></li>
			<li class="menu-item"><Link to={`/Project`} class="menu-link">
					<i class="fas fa-project-diagram"></i><span>Project Master</span></Link></li>
			<li class="menu-item"><Link to={`/Allocation`} class="menu-link">
					<i class="fas fa-user"></i><span>Employee Allocation</span></Link></li>
			<li class="menu-item"><Link to={`/Bench`} class="menu-link">
					<i class="fas fa-user-clock"></i><span>Bench Employees</span></Link></li>
			<li class="menu-item "><Link to={`/History_main`} class="menu-link">
					<i class="fas fa-history"></i><span>History</span></Link></li>
			<li class="menu-item"><Link to={`/Time`} class="menu-link">
					<i class="fas fa-clock"></i><span>Timesheet</span></Link></li>
		</ul>
	</div>
    </div>
  )
}

export default Side
