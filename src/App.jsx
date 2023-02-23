import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import './App.css'
import AdminDashBoard from './components/Admin/Dashboard/AdminDashboard';
function App() {
  return (
    <div className="home_background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin" element={<AdminDashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
