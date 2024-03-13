import React from 'react'

import "./dash.css"
const Login = () => {
  return (
    <div className='demo'>
     
	<div class="container">
		

		<h2 style={{ color: 'red' }}>Dashboard Admin:</h2>
		<form class="form-container">
			<div class="search-field">
				<label>Emp ID</label>
				<div class="input-container">
					<input type="text" name="empId" id="employeeId" placeholder="Search by Emp ID " />
					<span class="search-icon" id="search-icon1"></span>
				</div>
			</div>

			<div class="search-field">
				<label>Dept</label>
				<div class="input-container">
					<input type="text" id="dept" name="dept" placeholder="Search by Dept" />
					<span class="search-icon" id="search-icon2"></span>
				</div>
			</div>

			<div class="search-field">
				<label>Emp Name</label>
				<div class="input-container">
					<input type="text" id="empName" name="empName" placeholder="Search by Emp Name" />
					<span class="search-icon" id="search-icon3"></span>
				</div>
			</div>

			<div class="search-field">
				<label>Manager</label>
				<div class="input-container">
					<input type="text" id="manager" name="manager" placeholder="Search by Manager" />
					<span class="search-icon" id="search-icon4"></span>
				</div>
			</div>

			<div class="search-field">
				<label>Client</label>
				<div class="input-container">
					<input type="text" id="client" name="client" placeholder="Search by Client" />
					<span class="search-icon" id="search-icon5"></span>
				</div>
			</div>

			<div class="search-field">
				<label>Project</label>
				<div class="input-container">
					<select id="dropdown" name="project">
					</select>
				</div>
			</div>

			<div class="search-field">
				<label>Status</label>
				<div class="input-container">
					<select id="dp" name="status">
						<option value="" selected disabled>Select Status</option>
						<option value="All">All User</option>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>
				</div>
			</div>

			<div class="search-field">
				<label>Allocation</label>
				<div class="input-container">
					<select id="projectType" name="allocation">
						<option value="" selected disabled>Select Allocation</option>
						<option value="Billable">Billable</option>
						<option value="Non-Billable">Non-Billable</option>
					</select>
				</div>
			</div>
		</form>
		<div class="result-box" style={{ justifyContent: 'center' }}>
    <div class="search-result">
        <div class="container1 border" style={{ marginLeft: '172px' }}>
            <table id="data-table" class="table table-bordered" style={{ marginRight: '50px' }}>
						<thead>
							<tr>
								<th id="sl">sl</th>
								<th id="empName">Emp Name</th>
								<th id="empId">Emp Id</th>
								<th id="project">Project</th>
								<th id="projectAllocation">Project Allocation</th>
								<th id="client">Client</th>
								<th id="manager">Manager</th>
								<th id="department">Department</th>
								<th id="status">Status</th>
								<th id="allocationStartDate">Allocation Start Date</th>
								<th id="allocationEndDate">Allocation End Date</th>
								<th id="action">Action</th>
								
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Login
