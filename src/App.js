import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Customer from './pages/Customer';
import CustomerGrid from './pages/CustomerGrid';
import CustomerList from './pages/CustomerList';
import Employees from './pages/Employees';
import ErrorPage from './pages/ErrorPage';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/customer" element= {<Customer />}></Route>
          <Route path="/customer-grid" element={<CustomerGrid/>}></Route>
          <Route path="/customer-list" element={<CustomerList/>}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
