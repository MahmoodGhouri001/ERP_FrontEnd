import React from 'react';
import './SalesOrders.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import SecondaryInputField from '../components/SecondaryInputField';
import MediumButton from '../components/MediumButton';
export default function SalesOrders() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="order-list-container">
        <div className="top-nav-order-list">
          <div className="order-list-heading">
            <h2>
              Sales Orders
            </h2>
          </div>
          <div className="order-list-nav-items">
            <SecondaryInputField
              type="text"
              placeholder="search"
            />
            <Link to="/place-order">
              <MediumButton
                button_name="Place order"
              />
            </Link>
          </div>

        </div>
        <div className="order-list-taps">
          <div className="taps-item">All Orders</div>
          <div className="taps-item">Processing</div>
          <div className="taps-item">Completed</div>
          <div className="taps-item">Cancelled</div>
        </div>
        <div className="order-list-table-container">
          <table className="table-content">
            <thead>
              <tr>
                <th>Order Code</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#123</td>
                <td>Mohammed</td>
                <td>Lenovo series 123</td>
                <td>21/12/2022</td>
                <td>Processing</td>
                <td>245</td>
                <td>₹158852</td>
                <td className="view-details-link"><Link to="/order-details">View Details</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
