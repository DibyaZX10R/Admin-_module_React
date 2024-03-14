import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from "recharts";
import { FaTimes } from "react-icons/fa";
import './Home.css';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
  } from "react-icons/fa";

const COLORS = ["#4caf50", "#f44336", "#ff9800"];

const pieChartData = [
  { name: "Approved", value: 5 },
  { name: "Rejected", value: 3 },
  { name: "Pending", value: 2 },
];

const Dashboard = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(updateDateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

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
                <div className="status-box" style={{ backgroundColor: 'lightgray' }}>
                <FaCheckCircle color="#4caf50" size={25} />
                    <p id="one"></p>
                    <span className="status-count">Total no. of Employees</span>
                </div>
                <div className="status-box" style={{ backgroundColor: 'lightgray' }}>
                <FaTimesCircle color="#f44336" size={25} />
                    <p id="two"></p>
                    <span className="status-count">Unallocated Employee</span>
                </div>
                <div className="status-box" style={{ backgroundColor: 'lightgray' }}>
                
                <FaCheckCircle color="#4caf50" size={25} />
                    <p id="three"></p>
                    <span className="status-count">Allocated Employee</span>
                </div>
            </div>
            
            <PieChart width={400} height={250}>
              <Pie
                data={[
                  { name: "Approved", value:50},
                  { name: "Rejected", value: 24 },
                  { name: "Pending", value: 14 },
                ]}
                dataKey="value"
                fontSize={15}
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {[
                  { name: "Approved", value: 50 },
                  { name: "Rejected", value: 24 },
                  { name: "Pending", value: 14 },
                ].map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
        </div>
    );
};

export default Dashboard;
