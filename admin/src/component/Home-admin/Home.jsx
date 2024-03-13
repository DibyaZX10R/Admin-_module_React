import React, { useState, useEffect } from 'react';
import './Home.css'; 

const Dashboard = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        // Function to update current date-time
        const updateDateTime = () => {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            };
            const formattedDateTime = now.toLocaleString('en-US', options);
            setCurrentDateTime(formattedDateTime);
        };

        // Update date-time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="dashboard-container">
            <div className="pending-div">
                <span className="pending">No pending task</span>
            </div>
            <div className="date-time-card">
                <div className="date-time">{currentDateTime}</div>
            </div>
            <div id="calendar" className="calendar" style={{ display: 'none' }}>
                <div className="calendar-header">
                    <span id="prevMonth">&lt;</span>
                    <span id="currentMonthYear"></span>
                    <span id="nextMonth">&gt;</span>
                </div>
                <div className="calendar-body">
                    {/* Calendar days will be dynamically generated here */}
                </div>
            </div>
            <div className="status-container">
                <div className="status-box" style={{ backgroundColor: '#ffa766' }}>
                    <p id="one"></p>
                    <span className="status-count">Total no. of Employees</span>
                </div>
                <div className="status-box" style={{ backgroundColor: '#ff6666' }}>
                    <p id="two"></p>
                    <span className="status-count">Unallocated Employee</span>
                </div>
                <div className="status-box" style={{ backgroundColor: '#1aff9a' }}>
                    <p id="three"></p>
                    <span className="status-count">Allocated Employee</span>
                </div>
            </div>
            <div className="chart-container">
                <canvas id="employeeChart" width="383" height="383" style={{ display: 'block', boxSizing: 'border-box', height: '307px', width: '307px' }}></canvas>
            </div>
        </div>
    );
};

export default Dashboard;
