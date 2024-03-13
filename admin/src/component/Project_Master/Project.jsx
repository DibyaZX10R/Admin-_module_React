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
        <div className="project-container">
            <form className="project-form">
                <div className="project-field">
                    <label htmlFor="projectId">Search by Project ID</label>
                    <input type="text" id="projectId" name="projectId" placeholder="Search by Project ID" onKeyDown={handleEnter} />
                
                
                    <label htmlFor="projectTitle">Search by Project Title</label>
                    <input type="text" id="projectTitle" name="projectTitle" placeholder="Search by Project Title" onKeyDown={handleEnter} />
                
            
                    <label htmlFor="projectType">Project Type</label>
                    <select id="projectType" name="projectType" onChange={handleDropdownChange}>
                        <option value="" disabled>Select project type</option>
                        <option value="Billable">Billable</option>
                        <option value="Non-Billable">Non-Billable</option>
                    </select>
                
                    <label htmlFor="client">Search by Client</label>
                    <input type="text" id="client" name="client" placeholder="Search by Client" onKeyDown={handleEnter} />
                </div>  
            </form>
            
            <table className="project-table">
            <button className='probtn' type="button">Add New</button>
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
            </table>
        </div>
    );
};

export default Project;
