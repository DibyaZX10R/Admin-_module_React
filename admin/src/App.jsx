import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './component/Dashboard/dashboard'
import Header from './component/Header/Header'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"
import Project from './component/Project_Master/Project'
import Side from './component/Side_Bar/Side'
import Allocation from './component/Employee_allocation/Allocation'
import Bench from './component/Bench_Employee/Bench'
import History_main from './component/History/History_main'
import Time from './component/Timesheet/Time'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Side />
      

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Allocation' element={<Allocation />} />
        <Route path='/Bench' element={<Bench />} />
        <Route path='/History_main' element={<History_main />} />
        <Route path='/Time' element={<Time/>} />
      </Routes>
    </>
  )
}

export default App
