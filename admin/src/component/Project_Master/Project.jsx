import React from 'react';
import "./Project.css"

const Project = () => {
    const toggleSidebar = () => {
        // Define toggleSidebar function logic here
    };

    const handleEnter = (event) => {
        // Define handleEnter function logic here
    };

    const handleDropdownChange = (event) => {
        // Define handleDropdownChange function logic here
    };

    return (
        <div>
            <h2 style={{ color: 'red' }}> Project Master Details:</h2>
            <form className="form-container">
                <div className="search-field">
                    <label>Search by Project ID</label>
                    <input type="text" id="empId" name="empId" placeholder="Search by Project ID" onKeyDown={handleEnter} />
                    <label>Search by Project Title</label>
                    <input type="text" id="dept" name="dept" placeholder="Search by Project Title" onKeyDown={handleEnter} />
                </div>
                <div className="search-field">
                    <div className="input-container">
                        <label htmlFor="projectType">Project Type</label>
                        <select id="projectType" name="projectType" onChange={handleDropdownChange}>
                            <option value="" selected disabled>Select project type</option>
                            <option value="Billable">Billable</option>
                            <option value="Non-Billable">Non-Billable</option>
                        </select>
                        <label>Search by client</label>
                        <input type="text" id="client" name="client" placeholder="Search by client" onKeyDown={handleEnter} style={{ padding: '10px 2px' }} />
                    </div>
                </div>
                <div className="navigation">
                    <button type="button">Add New</button>
                </div>
            </form>
            <hr style={{ width: '100%', height: '20%', backgroundColor: 'black', margin: '5px 0px' }} />
            <table id="fg">
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
