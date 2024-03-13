import React from 'react'
import "./Bench.css"

const Bench = () => {
  return (
    
 
<div class="container">
    <h2 style={{ color: 'red' }}>Bench Employee's List:</h2>
    <form class="form-container">
        <div class="search-field">
            <label>Emp ID</label>
            <div class="input-container">
                <input type="text" name="empId" id="employeeId" placeholder="Search by Emp ID" />
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
                <input type="text" id="empNames" name="empName" placeholder="Search by Emp Name" />
                <span class="search-icon" id="search-icon3"></span>
            </div>
        </div>
 
       
 
        
 
    </form>
    <div class="result-box">
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
    
  )
}

export default Bench
