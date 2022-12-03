import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Customer from './components/Customer';
import CustomerGrid from './components/CustomerGrid';
import CustomerList from './components/CustomerList';
import Employees from './components/Employees';
import ErrorPage from './components/ErrorPage';
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
