import React from 'react';
import "./History_main.css"
 
const History = () => {
    return (
        <div>
            <h2 style={{ color: 'red' }}>History:</h2>
 
            <div className="Hcontainerbox">
                <div className="Hsbcontainer-1">
                    <div className="table">
                        <div>
                            <div className="H-input">
                                <form id="searchByIdForm">
                                <label for="employeeId">Employee Id :</label>
                                    <input type="text" id="searchByIdInput" placeholder="Search by Emp ID" name="search" />
                                   
                                </form>
                            </div>
                            <div className="H-input">
                               
                                <form id="searchByNameForm">
                                <label for="employeeId">Employee Name :</label>
                                    <input type="text" id="searchByNameInput" placeholder="Search by Emp Name" name="search" />
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
           
 
            <table className='h-table'>
                <colgroup>
                    <col style={{ width: '10%' }} className="table_headings" />
                    <col style={{ width: '10%' }} className="table_headings" />
                    <col style={{ width: '10%' }} className="table_headings" />
                    <col style={{ width: '10%' }} className="table_headings" />
                    <col style={{ width: '10%' }} className="table_headings" />
                    <col style={{ width: '10%' }} className="table_headings" />
                    <col style={{ width: '10%' }} className="table_headings" />
                    <col style={{ width: '10%' }} className="table_headings" />
                    <col style={{ width: '10%' }} className="table_headings" />
                </colgroup>
                <thead>
                    <tr>
                        <th className="table_headings">Emp ID</th>
                        <th className="table_headings">Emp Name</th>
                        <th className="table_headings">Project</th>
                        <th className="table_headings">Proj Allocation</th>
                        <th className="table_headings">Client</th>
                        <th className="table_headings">Manager</th>
                        <th className="table_headings">Department</th>
                        <th className="table_headings">Alloc Start Date</th>
                        <th className="table_headings">Alloc End Date</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {/* Table content goes here */}
                </tbody>
            </table>
        </div>
    );
}
 
function toggleSidebar() {
    // Implement toggleSidebar function logic here
}
 
export default History;