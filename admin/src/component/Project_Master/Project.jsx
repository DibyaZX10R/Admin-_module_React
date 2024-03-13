import React from 'react';
import './Project.css';
 
const Project = () => {
    const handleEnter = (event) => {
        // Define handleEnter function logic here
    };
 
    const handleDropdownChange = (event) => {
        // Define handleDropdownChange function logic here
    };
 
    return (
        <div>
            {/* <h2 className="title">Project Master Details:</h2> */}
            <form className="project-container">
                <div className="project-field">
                    <label htmlFor="empId">Search by Project ID</label>
                    <input type="text" id="empId" name="empId" placeholder="Search by Project ID" onKeyDown={handleEnter} />
                    <label htmlFor="dept">Search by Project Title</label>
                    <input type="text" id="dept" name="dept" placeholder="Search by Project Title" onKeyDown={handleEnter} />
                </div>
                <div className="project-field1">
                    <div className="Project-container1">
                        <label htmlFor="projectType">Project Type</label>
                        <select id="projectType" name="projectType" onChange={handleDropdownChange}>
                            <option value="" disabled>Select project type</option>
                            <option value="Billable">Billable</option>
                            <option value="Non-Billable">Non-Billable</option>
                        </select>
                        <label htmlFor="client">Search by client</label>
                        <input type="text" id="client" name="client" placeholder="Search by client" onKeyDown={handleEnter} />
                    </div>
                </div>
               
            </form>
            <div className="navigation">
                    <button type="button">Add New</button>
                </div>
            <table className='project-table'>
                <thead>
                    <tr>
                        <th>Project Manager</th>
                        <th>Project Title</th>
                        <th>Project Type</th>
                        <th>Project Scope</th>
                        <th>Client</th>
                        <th>Start Date</th>
                        <th>Expected End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add table body content */}
                </tbody>
            </table>
           
        </div>
    );
};
 
export default Project;