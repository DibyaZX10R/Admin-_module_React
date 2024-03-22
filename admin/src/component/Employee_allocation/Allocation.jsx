import React, { useEffect, useState } from 'react'
import "./Allocation.css"
import Header from '../Header/Header'
import Side from '../Side_Bar/Side'
import axios from 'axios'

const Allocation = () => {
    const [formData, setFormData] = useState({});
    const [info, setInfo] = useState([])
    const [information, setInformation] = useState([])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const getuserifo = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/hello/${formData.employeeId}`);
            // console.log(response);
            setInfo(response.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getuserifo();
    }, [formData.employeeId])
    const getuerinfo = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/${formData.projectName}`);
            // console.log(response);
            setInformation(response.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getuerinfo();
    }, [formData.projectName])
    console.log(information)
    // const handlesubmit=async(e)=>{
    //     e.preventDefault();
    //    try {
    //     const response = await axios.post(`http://localhost:8080/insertData/${formData.projectName}`,
    //     JSON.stringify(formData),
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 }
    //             }
    //         );
    //         console.log(response)
    //    } catch (error) {

    //    }
    // }
    const [headerText, setHeaderText] = useState('Employee Allocation');

    const handleMenuItemClick = (text) => {
        setHeaderText(text);
    };
    return (
        <>
            <Header headerText={headerText} />
            <Side onMenuItemClick={handleMenuItemClick} />
            <div>
                <div className="container1 ">
                    {/* <h2 style={{ color: 'red' }}>Employee Allocation:</h2> */}
                    <form id="myForm">
                        <div className="form-group">
                            <label for="employeeId">Employee Id:</label>
                            <input type="text" className="eidInput" id="employeId" name="employeeId" required onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label for="employeeName">Employee Name:</label>
                            <input type="text" id="employeeName" name="employeeName" required onChange={handleInputChange} value={info.employeeName} />
                        </div>
                        <div className="form-group">
                            <label for="department">Department:</label>
                            <input type="text" id="department" name="department" required onChange={handleInputChange} value={info.department} />
                        </div>
                        <div className="form-group">
                            <label for="project">Project:</label>
                            <select id="dropdown" name="projectName" onChange={handleInputChange} >
                                <option value="">Select Project</option>
                                {/* <option value="ICAR">ICAR</option>
                        <option value="STL">STL</option> */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="projectAllocation">Project Allocation:</label>
                            <select id="proj" name="status" onChange={handleInputChange}>
                                <option value="">Select Allocation</option>
                                <option value="Billable">Billable</option>
                                <option value="NonBillable">Non-Billable</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="client">Client:</label>
                            <input type="text" id="client" name="client" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label for="reportingManager">Reporting Manager:</label>
                            <input type="text" id="reportingManager" name="manager" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label for="allocationStartDate">Allocation start Date:</label>
                            <input type="date" id="allocationStartDate" name="all_startDate" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label for="allocationEndDate">Allocation end Date:</label>
                            <input type="date" id="allocationEndDate" name="all_endDate" onChange={handleInputChange} />
                        </div>
                        <div className="button-group">
                            <button type="submit" className="submit-button">Submit</button>
                            <button type="reset" className="back-btn">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Allocation