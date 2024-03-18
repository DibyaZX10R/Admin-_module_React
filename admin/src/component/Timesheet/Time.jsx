 
import React, { useState } from 'react';
import './Time.css';
import Header from '../Header/Header';
import Side from '../Side_Bar/Side';
 
const Time = () => {
  const [headerText, setHeaderText] = useState('My Timesheet');

  const handleMenuItemClick = (text) => {
    setHeaderText(text);
  };
  return (
    <>
      <Header headerText={headerText} />
      <Side onMenuItemClick={handleMenuItemClick} />
    <div>
      <div className="employee-info">
       
       
          <p>Employee Name:</p>
          <p>Role:</p>
          <p>Project:</p>
          <p>Reporting Manager:</p>
       
      </div>
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
       
      </div>
      <div className="timenav">
          <button type="button">Add New</button>
        </div>
   
      <section className='time-section'>
     
        <table className="time-table">
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
              <td>Action</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="totalHour-div">
       
        Total Activity Hours:<input type="text" id="totalActivityHours"  />
      </div>
    </div>
    </>
  );
};
 
export default Time;
 