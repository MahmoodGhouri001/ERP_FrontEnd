import React from 'react';
import './Employee.css';
import {Link} from 'react-router-dom';
import { HiOutlineUserAdd } from 'react-icons/hi';
import EmployeeTable from '../components/EmployeeTable';
import SecondaryInputField from '../components/SecondaryInputField';
import LargeButton from '../components/LargeButton';
import MediumButton from '../components/MediumButton';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
export default function Employees() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Employee-container">
        <div className="employee-top-nav">
          <div className="nav-items1">
            <h2>Employees</h2>
            <Link to="/add-employee">
            <MediumButton
              add_icon=<HiOutlineUserAdd />
              button_name="Employee"
            />
            </Link>
          </div>
          <div className="nav-items2">
            <SecondaryInputField
              type="text"
              placeholder="Name"
            />
            <SecondaryInputField
              type="text"
              placeholder="Title"
            />
            <select placeholder="Address">
              <option value="Hyderabad">Hyderabad</option>
              <option value="Banglore">Banglore</option>
              <option value="Delhi">Delhi</option>
            </select>
            <LargeButton
              button_name="Search"
            />
          </div>
        </div>
        <div className="employee-table-container">
          <EmployeeTable
            checkbox=<input type="checkbox" />
            name="Full Name"
            title="Title"
            email="Email"
            address="Address"
            dateofbirth="Date of Birth"
            contactcreated="Contact Created"
            action="Action"
          />
        </div>
      </div>


    </>
  )
}
