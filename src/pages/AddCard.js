import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./AddCard.css";
import { Link } from "react-router-dom";
import SecondaryInputField from "../components/SecondaryInputField";
import { HiOutlineArrowLeft } from "react-icons/hi";
export default function AddCard() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="AddCard-main-container">
        <div className="add-card-top-nav-container">
          <Link to="/billing" className="arrow-left">
            <HiOutlineArrowLeft />
          </Link>
          <h2>Add New Card</h2>
        </div>
        <div className="add-card-form-container">
          <div className="add-card-form-area">
            <div className="add-card-form-key">
              <label>Name on card</label>
              <label>Card Number</label>
              <label>CVV number</label>
              <label>Expiration</label>
            </div>
            <div className="add-card-form-value">
              <SecondaryInputField />
              <SecondaryInputField />
              <SecondaryInputField />
              <SecondaryInputField />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
