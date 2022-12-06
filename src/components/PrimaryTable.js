import React from 'react'

export default function PrimaryTable() {
  return (
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
  )
}
