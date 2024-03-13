import React from 'react';
import './Time.css';

const Time = () => {
  const renderEmployeeInfo = () => (
    <div className="employee-info">
      <h2 style={{ color: 'red' }}>My TimeSheet:</h2>
      <p>Employee Name:</p>
      <p>Role:</p>
      <p>Project:</p>
      <p>Reporting Manager:</p>
    </div>
  );

  const renderDateInputs = () => (
    <div className="date-div">
      <div className="week-start">
        <label htmlFor="weekStartDate">Week Start Date:</label>
        <input type="date" id="weekStartDate" name="weekStartDate" style={{ color: '#310803' }} />
      </div>
      <div className="week-start">
        <label htmlFor="weekEndDate">Week End Date:</label>
        <input type="date" id="weekEndDate" name="weekEndDate" style={{ color: '#310803' }} />
      </div>
      <div className="week-start">
        <label htmlFor="timesheet_approve">Timesheet Approval Status:</label>
        <input type="text" id="timesheetStatus" readOnly />
      </div>
      <div className="navigation">
        <button type="button">Add New</button>
      </div>
    </div>
  );

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Login</th>
          <th>Logout</th>
          <th>Project</th>
          <th>Client</th>
          <th>Activity Hour</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>25-01-2024</td>
          <td>09:00 AM</td>
          <td>05:00 PM</td>
          <td>Project A</td>
          <td>Client X</td>
          <td>8</td>
          <td>Approved</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div>
      <div className="abc">
        <div className="container">
          {renderEmployeeInfo()}
          {renderDateInputs()}
        </div>
      </div>
      <hr style={{ width: '100%', height: '20px', backgroundColor: 'black', margin: '10px 10px' }} />
      <section>{renderTable()}</section>
      <div className="totalHour-div">
        <label>Total Activity Hours:</label>
        <input type="text" id="totalActivityHours" readOnly />
      </div>
    </div>
  );
};

export default Time;
