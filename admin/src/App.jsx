import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// import "./Header.css";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"
import Dashboard from './component/Dashboard/dashboard'
import Project from './component/Project_Master/Project'
import Side from './component/Side_Bar/Side'
import Allocation from './component/Employee_allocation/Allocation'
import Bench from './component/Bench_Employee/Bench'
import History_main from './component/History/History_main'
import Time from './component/Timesheet/Time';
import Header from './component/Header/Header';

function App() {
  const [headerText, setHeaderText] = useState('Welcome To Home ');

  const handleMenuItemClick = (text) => {
    setHeaderText(text);
  };

  return (
    <>
      <Header headerText={headerText} />
      <Side onMenuItemClick={handleMenuItemClick} />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Allocation' element={<Allocation />} />
        <Route path='/Bench' element={<Bench />} />
        <Route path='/History_main' element={<History_main />} />
        <Route path='/Time' element={<Time/>} />
      </Routes>
    </>
  );
}

export default App;
