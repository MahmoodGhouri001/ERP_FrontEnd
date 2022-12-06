import React from 'react';
import './Employee.css';
import EmployeeDetails from '../pages/EmployeeDetails';
import SecondaryInputField from '../components/SecondaryInputField';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
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
            <SecondaryButton
              button_name="Employee"
            />
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
            <PrimaryButton
              button_name="Search"
            />
          </div>
        </div>
        <div className="employee-table-container">
          <table className="table-content">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Full Name</th>
                <th>Title</th>
                <th>Email</th>
                <th>Address</th>
                <th>Date of Birth</th>
                <th>Contact created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {EmployeeDetails.map((EmployeeDetails, index) =>
                <tr key={index}>
                  <td>{EmployeeDetails.checkbox}</td>
                  <td><img src={EmployeeDetails.profile}/>{EmployeeDetails.fullname}</td>
                  <td>{EmployeeDetails.title}</td>
                  <td>{EmployeeDetails.email}</td>
                  <td>{EmployeeDetails.address}</td>
                  <td>{EmployeeDetails.dateofbirth}</td>
                  <td>{EmployeeDetails.contactcreated}</td>
                  <td>{EmployeeDetails.edit}{EmployeeDetails.delete}</td>
                </tr>
              )}


            </tbody>
          </table>

        </div>
      </div>


    </>
  )
}
