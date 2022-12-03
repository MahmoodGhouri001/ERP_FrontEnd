import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import InputField from './InputField';
export default function Employees() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Employee-container">
        <div className="employee-top-nav">
            <div className="nav-items1">
                <h2>Employees</h2>
                <button>Add Employee</button>
            </div>
            <div className="nav-items2">
                <InputField 
                    type="text"
                    placeholder="Name"
                />
                <InputField
                type="text"
                placeholder="Title"
                 />
                <select placeholder="Address">
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Delhi">Delhi</option>
                </select>
                <InputField 
                    type="text"
                    placeholder="Search"
                />
            </div>
        </div>
      </div>


    </>
  )
}
