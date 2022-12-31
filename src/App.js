import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Customer from './pages/Customer';
import AddCustomer from './pages/AddCustomer';
import CustomerGrid from './pages/CustomerGrid';
import CustomerList from './pages/CustomerList';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import SalesOrders from './pages/SalesOrders';
import PlaceOrder from './pages/PlaceOrder';
import OrderDetails from './pages/OrderDetails';
import ManageStores from './pages/ManageStores';
import AddStore from './pages/AddStore';
import Billing from './pages/Billing';
import AddCard from './pages/AddCard';
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
          <Route path="/add-customer" element={<AddCustomer />}></Route>
          <Route path="/customer-grid" element={<CustomerGrid/>}></Route>
          <Route path="/customer-list" element={<CustomerList/>}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/add-employee" element={<AddEmployee />}></Route>
          <Route path="/products" element={<ProductList/>}></Route>
          <Route path="/add-product" element={<AddProduct />}></Route>
          <Route path="/sales-orders" element={<SalesOrders/>}></Route>
          <Route path="/place-order" element={<PlaceOrder/>}></Route>
          <Route path="/order-details" element={<OrderDetails/>}></Route>
          <Route path="/manage-stores" element={<ManageStores/>}></Route>
          <Route path="/add-store" element={<AddStore/>}></Route>
          <Route path="/billing" element={<Billing/>}></Route>
          <Route path="/add-card" element={<AddCard/>}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
