import React from 'react'
import './CustomerList.css';
import MediumButton from '../components/MediumButton';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { FiGrid, FiList } from 'react-icons/fi';
import { HiSearch, HiOutlineUserAdd } from 'react-icons/hi';
import CustomerDetails from './CustomerDetails';
export default function CustomerList() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="CustomerList-container">
                <div className="customer-nav-top">
                    <div className="customerlist-heading">
                        <h2>Customers</h2>
                    </div>
                    <div className="nav-top-items">
                        <div className="customerlist-search-bar">
                            <input type="search" name="" id="" />
                            <i className="customer-search-icon"><HiSearch /></i>
                        </div>
                        <div className="list-and-grid-btn">
                            <Link to="/customer-grid"><button><FiGrid /></button></Link>
                            <Link to="/customer-list"> <button><FiList /></button></Link>
                        </div>
                        <div className="customerlist-btn">
                            <MediumButton
                                button_name="Export"
                            />
                            <Link to="/add-customer">
                                <MediumButton
                                    button_name="Customer"
                                    add_icon=<HiOutlineUserAdd />
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="customer-table-container">
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Phone number</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CustomerDetails.map((CustomerDetails, index) =>
                                <tr key={index}>
                                    <td>{CustomerDetails.checkbox}</td>
                                    <td>{CustomerDetails.id}</td>
                                    <td>{CustomerDetails.customer_name}</td>
                                    <td>{CustomerDetails.customer_mobile}</td>
                                    <td>{CustomerDetails.customer_email}</td>
                                    <td>{CustomerDetails.address}</td>
                                    <td>{CustomerDetails.edit}{CustomerDetails.delete}</td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
