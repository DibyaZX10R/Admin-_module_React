import React, { useState } from 'react';
import './Project.css';
import toastr from 'toastr';
import Header from '../Header/Header';
import Side from '../Side_Bar/Side';

const Project = () => {
    const [projectData, setProjectData] = useState([]);

    const handleEnter = (event) => {
        // Define handleEnter function logic here
        if (event.key === 'Enter') {
            // Perform search or filter operations based on the input values
            const searchTerm = event.target.value.trim().toLowerCase();
            const filteredData = projectData.filter((project) =>
                Object.values(project).some((value) =>
                    value.toString().toLowerCase().includes(searchTerm)
                )
            );
            setProjectData(filteredData);
        }
    };

    const handleDropdownChange = (event) => {
        // Define handleDropdownChange function logic here
        const projectType = event.target.value;
        if (projectType) {
            const filteredData = projectData.filter(
                (project) => project.projectType === projectType
            );
            setProjectData(filteredData);
        } else {
            // If no project type is selected, show all projects
            setProjectData(initialProjectData);
        }
    };
    

    const saveNewRow =(button)=> {
        var newRow = button.parentNode.parentNode;
        var projectManager = newRow.cells[0].querySelector('input').value;
        var projectTitle = newRow.cells[1].querySelector('input').value;
        var projectTypeSelect = document.getElementById('ptype');
        var projectType = projectTypeSelect.value;
        var projectDescription = newRow.cells[3].querySelector('input').value;
        var client = newRow.cells[4].querySelector('input').value;
        var startDate = newRow.cells[5].querySelector('input').value;
        var endDate = newRow.cells[6].querySelector('input').value;
        var table = document.querySelector('table');

        const requestData ={
            projectName: projectTitle,
            projectType: projectType,
            projectDescription: projectDescription,
            client: client,
            project_startdate: startDate,
            project_enddate: endDate,
            manager: projectManager
        };

      
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/addProject', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var store = xhr.responseText;

                if (store.trim() === 'Project With this name already exist') {
                    table.innerHTML = '';
                    alert(store);
                } else {
                    // After saving to the database, update the UI with edit and delete buttons
                    newRow.cells[7].innerHTML =
                    `
                    <button type="button" onClick=${saveNewRow}>Save</button>
                    <button type="button" onClick=${cancelNewRow}>Cancel</button>
                `;
                    // Optionally, you can also update the UI with the saved data
                    newRow.cells[0].innerHTML = projectManager;
                    newRow.cells[1].innerHTML = projectTitle;
                    newRow.cells[2].innerHTML = projectType;
                    newRow.cells[3].innerHTML = projectDescription;
                    newRow.cells[4].innerHTML = client;
                    newRow.cells[5].innerHTML = startDate;
                    newRow.cells[6].innerHTML = endDate;

                    // Update the projectData state
                    setProjectData((prevData) => [...prevData, requestData]);
                }
            }
        };

        xhr.send(JSON.stringify(requestData));
    }
    const addNewRow = () => {
        var table = document.querySelector('table');
        var newRow = table.insertRow(table.rows.length);
    
        // Add cells to the new row
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
    
        // Add input fields to cells
        cell1.innerHTML = '<input type="text" name="newManager" required />';
        cell2.innerHTML = '<input type="text" name="newProjectTitle" >';
        cell3.innerHTML = '<select name="newProjectType" id="ptype" required><option value="">Select project type</option><option value="Billable">Billable</option><option value="Non-Billable">Non-Billable</option></select>';
        cell4.innerHTML = '<input type="text" name="newProjectScope" required>';
        cell5.innerHTML = '<input type="text" name="newClient" required>';
        cell6.innerHTML = '<input type="date" name="newStartDate" required>';
        cell7.innerHTML = '<input type="date" name="newEndDate" required>';
    
        cell8.innerHTML = `
            <button type="button" onclick="saveNewRow(this)">Save</button>
            <button type="button" onClick="cancelNewRow()">Cancel</button>
        `;
    }
    const cancelNewRow = (button) => {
        var newRow = button.parentNode.parentNode;
        newRow.parentNode.removeChild(newRow);
    }

    const editRow = (rowIndex) => {
        var row = document.querySelector(`table tr:nth-child(${rowIndex + 1})`);

        // Save the original content of each cell
        for (var i = 0; i < row.cells.length - 1; i++) {
            var cell = row.cells[i];
            cell.setAttribute('data-original-content', cell.innerHTML);
        }

        // Replace the content with input fields for editing
        for (var i = 0; i < row.cells.length - 1; i++) {
            var cell = row.cells[i];
            cell.innerHTML = '<input type="text" value="' + cell.getAttribute('data-original-content') + '">';
        }

        // Replace the Edit button with Save and Cancel buttons
        const saveButton = document.createElement('button');
        saveButton.innerHTML = 'Save';
        saveButton.onclick = function () {
            saveEditedRow(rowIndex);
        };

        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.onclick = function () {
            cancelEditRow(rowIndex);
        };

        row.cells[row.cells.length - 1].innerHTML = '';
        row.cells[row.cells.length - 1].appendChild(saveButton);
        row.cells[row.cells.length - 1].appendChild(cancelButton);
    }

    const saveEditedRow = (rowIndex) =>  {
        var row = document.querySelector(`table tr:nth-child(${rowIndex + 1})`);

        // Extract data from the edited row
        var project_id = projectData[rowIndex].project_id;
        var projectManager = row.cells[0].querySelector('input').value;
        var projectTitle = row.cells[1].querySelector('input').value;
        var projectType = row.cells[2].querySelector('input').value;
        var projectScope = row.cells[3].querySelector('input').value;
        var client = row.cells[4].querySelector('input').value;
        var startDate = row.cells[5].querySelector('input').value;
        var endDate = row.cells[6].querySelector('input').value;

        if (!projectManager || !projectTitle || !projectScope || !client || !startDate || !endDate || !projectType) {
            toastr.error('All fields are required');
            return; // Stop further execution if any field is empty
        }

        // Replace Save and Cancel buttons with Edit button
        var editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.onclick = function () {
            editRow(rowIndex);
        };

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function () {
            deleteRow(rowIndex);
        };

        row.cells[row.cells.length - 1].innerHTML = '';
        row.cells[row.cells.length - 1].appendChild(editButton);
        row.cells[row.cells.length - 1].appendChild(deleteButton);

        // Update the UI with the saved data
        row.cells[0].innerHTML = projectManager;
        row.cells[1].innerHTML = projectTitle;
        row.cells[2].innerHTML = projectType;
        row.cells[3].innerHTML = projectScope;
        row.cells[4].innerHTML = client;
        row.cells[5].innerHTML = startDate;
        row.cells[6].innerHTML = endDate;

        
        var requestData = {
            project_id: project_id,
            projectName: projectTitle,
            projectType: projectType,
            projectDescription: projectScope,
            client: client,
            project_startdate: startDate,
            project_enddate: endDate,
            manager: projectManager
        };

        var xhr = new XMLHttpRequest();
        xhr.open('PUT', '/update', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                toastr.success('Data updated successfully');
                // Update the projectData state with the updated project
                setProjectData((prevData) =>
                    prevData.map((project) =>
                        project.project_id === requestData.project_id
                            ? requestData
                            : project
                    )
                );
            } else {
                toastr.error('Error updating data Status:', xhr.status);
            }
        };
        xhr.send(JSON.stringify(requestData));
    }

    const cancelEditRow = (rowIndex) =>  {
        var row = document.querySelector(`table tr:nth-child(${rowIndex + 1})`);

        // Restore the original content of each cell
        for (var i = 0; i < row.cells.length - 1; i++) {
            var cell = row.cells[i];
            cell.innerHTML = cell.getAttribute('data-original-content');
        }

        // Replace Save and Cancel buttons with Edit button
        var editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.onclick = function () {
            editRow(rowIndex);
        };

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function () {
            deleteRow(rowIndex);
        };

        row.cells[row.cells.length - 1].innerHTML = '';
        row.cells[row.cells.length - 1].appendChild(editButton);
        row.cells[row.cells.length - 1].appendChild(deleteButton);
    }

    const deleteRow = (rowIndex) => {
        var row = document.querySelector(`table tr:nth-child(${rowIndex + 1})`);
        row.parentNode.removeChild(row);

        var project_id = projectData[rowIndex].project_id;
        var apiUrl = '/deleteProject/' + project_id;
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', apiUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Parse the response JSON into an object
                    var responseObj = JSON.parse(xhr.responseText);
                    // Update the table with the parsed object
                    // updateTable(responseObj);
                    toastr.success(responseObj);

                    // Update the projectData state
                    setProjectData((prevData) =>
                        prevData.filter((project) => project.project_id !== project_id)
                    );
                } else {
                    console.error('Error fetching data. Status:', xhr.status);
                }
            }
        };

        xhr.send();
    }
    const [headerText, setHeaderText] = useState('Project Master ');

const handleMenuItemClick = (text) => {
  setHeaderText(text);
};

    return (
        <>
         <Header headerText={headerText} />
      <Side onMenuItemClick={handleMenuItemClick} />
        <div>
            {/* <h2 className="title">Project Master Details:</h2> */}
            <form className="project-container">
                <div className="project-field">
                    <label htmlFor="empId">Search by Project ID</label>
                    <input
                        type="text"
                        id="empId"
                        name="empId"
                        placeholder="Search by Project ID"
                        onKeyDown={handleEnter}
                    />
                    <label htmlFor="dept">Search by Project Title</label>
                    <input
                        type="text"
                        id="dept"
                        name="dept"
                        placeholder="Search by Project Title"
                        onKeyDown={handleEnter}
                    />
                </div>
                <div className="project-field1">
                    <div className="Project-container1">
                        <label htmlFor="projectType">Project Type</label>
                        <select
                            id="projectType"
                            name="projectType"
                            onChange={handleDropdownChange}
                        >
                            <option value="">Select project type</option>
                            <option value="Billable">Billable</option>
                            <option value="Non-Billable">Non-Billable</option>
                        </select>
                        <label htmlFor="client">Search by client</label>
                        <input
                            type="text"
                            id="client"
                            name="client"
                            placeholder="Search by client"
                            onKeyDown={handleEnter}
                        />
                    </div>
                </div>
            </form>
            <div className="navigation">
                <button type="button" onClick={addNewRow}>
                    Add New
                </button>
            </div>
            <table className="project-table">
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
                    {projectData.map((project, index) => (
                        <tr key={index}>
                            <td>{project.manager}</td>
                            <td>{project.projectName}</td>
                            <td>{project.projectType}</td>
                            <td>{project.projectDescription}</td>
                            <td>{project.client}</td>
                            <td>{project.project_startdate}</td>
                            <td>{project.project_enddate}</td>
                            <td>Status</td>
                            <td>
                                <button type="button" onClick={() => editRow(index)}>
                                    Edit
                                </button>
                                <button type="button" onClick={() => deleteRow(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Project;