import React, { useState } from 'react'
import "./Bench.css"
import Header from '../Header/Header'
import Side from '../Side_Bar/Side'
 
const Bench = () => {
    const [headerText, setHeaderText] = useState('Bench Employees ');

const handleMenuItemClick = (text) => {
  setHeaderText(text);
};
  return (
   
 <>
    <Header headerText={headerText} />
      <Side onMenuItemClick={handleMenuItemClick} />
<div class="container2">
    {/* <h2 style={{ color: 'red' }}>Bench Employee List</h2> */}
    <form class="bench-container">
        <div class="Project-field">
            <label>Emp ID</label>
            <div class="input-container">
                <input type="text" name="empId" id="employeeId" placeholder="Search by Emp ID" />
                <span class="search-icon" id="search-icon1"></span>
            </div>
        </div>
 
        <div class="Project-field">
            <label>Dept</label>
            <div class="input-container">
                <input type="text" id="dept" name="dept" placeholder="Search by Dept" />
                <span class="search-icon" id="search-icon2"></span>
            </div>
        </div>
 
        <div class="Project-field">
            <label>Emp Name</label>
            <div class="input-container">
                <input type="text" id="empNames" name="empName" placeholder="Search by Emp Name" />
                <span class="search-icon" id="search-icon3"></span>
            </div>
        </div>
 
       
 
       
 
    </form>
    <div class="result-box1">
        <div class="search-result">
            <table id="data-table" class="table table-bordered">
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Emp Name</th>
                        <th>Designation</th>
                        <th>Last Allocation Date</th>
                        <th>Unallocated Duration</th>
                    </tr>
                </thead>
                <tbody>                  
                </tbody>
            </table>
        </div>
    </div>
</div>
</>
  )
}
 
export default Bench