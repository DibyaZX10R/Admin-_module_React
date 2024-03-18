import React, { useState } from 'react'
import "./Allocation.css"
import Header from '../Header/Header'
import Side from '../Side_Bar/Side'
 
const Allocation = () => {
    const [headerText, setHeaderText] = useState('Employee Allocation');

    const handleMenuItemClick = (text) => {
      setHeaderText(text);
    };
  return (
    <>
     <Header headerText={headerText} />
      <Side onMenuItemClick={handleMenuItemClick} />
    <div>
    <div class="container1 ">
        {/* <h2 style={{ color: 'red' }}>Employee Allocation:</h2> */}
        <form id="myForm">
            <div class="form-group">
                <label for="employeeId">Employee Id:</label>
                <input type="text" class="eidInput" id="employeeId" name="employeeId" required />
            </div>
            <div class="form-group">
                <label for="employeeName">Employee Name:</label>
                <input type="text" id="employeeName" name="employeeName" required />
            </div>
            <div class="form-group">
                <label for="department">Department:</label>
                <input type="text" id="department" name="department" required readonly />
            </div>
            <div class="form-group">
                <label for="project">Project:</label>
                <select id="dropdown" name="project"></select>
            </div>
            <div class="form-group">
                <label for="projectAllocation">Project Allocation:</label>
                <select id="proj" name="project_type">
                    <option value="">Select Allocation</option>
                    <option value="Billable">Billable</option>
                    <option value="NonBillable">Non-Billable</option>
                </select>
            </div>
            <div class="form-group">
                <label for="client">Client:</label>
                <input type="text" id="client" name="client" readonly/>
            </div>
            <div class="form-group">
                <label for="reportingManager">Reporting Manager:</label>
                <input type="text" id="reportingManager" name="manager" readonly/>
            </div>
            <div class="form-group">
                <label for="allocationStartDate">Allocation start Date:</label>
                <input type="date" id="allocationStartDate" name="all_startDate" />
            </div>
            <div class="form-group">
                <label for="allocationEndDate">Allocation end Date:</label>
                <input type="date" id="allocationEndDate" name="all_endDate" readonly/>
            </div>
            <div class="button-group">
                <button type="button" onclick="submitForm()" class="submit-button">Submit</button>
              <button type="reset" class="back-btn">Reset</button>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}
 
export default Allocation