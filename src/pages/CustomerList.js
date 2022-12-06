import React from 'react'
import './CustomerList.css'
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
                            <Link to="/customer-grid"><button><i><FiGrid /></i></button></Link>
                            <Link to="/customer-list"> <button><i><FiList /></i></button></Link>
                        </div>
                        <div className="customerlist-btn">
                            <button className="export-btn">Export</button>
                            <button className="add-btn"><i><HiOutlineUserAdd /></i> customer</button>
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
                                <th>Email address</th>
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
                            {/* <tr>
                                <td><input type="checkbox" /></td>
                                <td>235659</td>
                                <td>Mohammed Arshad</td>
                                <td>+91-9182631746</td>
                                <td>mohdarsha102me@gmail.com</td>
                                <td>Hyderabad, Telangana</td>
                                <td></td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
