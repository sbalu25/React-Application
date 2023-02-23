import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css'
import AdminDashBoard from './components/Admin/Dashboard/AdminDashboard';
import Prescriptions from './components/Admin/Prescriptions';
import Appointments from './components/Admin/Appointments';
function App() {
  return (
    <div className="home_background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashBoard />} />
          <Route path="/admin/prescriptions" element={<Prescriptions />} />
          <Route path="/admin/appointments" element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
