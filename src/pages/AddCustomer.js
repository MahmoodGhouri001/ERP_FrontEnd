import React from 'react';
import './AddCustomer.css';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MediumButton from '../components/MediumButton';
import SecondaryInputField from '../components/SecondaryInputField';
import { HiOutlineArrowLeft } from "react-icons/hi";
export default function AddCustomer() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="AddCustomer-container">
                <div className="top-nav-customer">
                    <Link to="/customer" className="arrow-left"><HiOutlineArrowLeft /></Link>
                    <h2>Add New Customer</h2>
                </div>
                <div className="customer-form-container">
                    <div className="customer-details-area">
                        <div className="customer-details-key">
                            <label>
                                Customer Name
                            </label>
                            <label>
                                Company Name
                            </label>
                            <label>
                                Email
                            </label>
                            <label >
                                Phone Number
                            </label>
                            <label>
                                Website
                            </label>
                        </div>
                        <div className="customer-details-value">
                            <div className="customer-details-inner-items">
                                <select>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                </select>
                                <SecondaryInputField
                                    type="text"
                                    placeholder="first name"
                                />
                                <SecondaryInputField
                                    type="text"
                                    placeholder="last name"
                                />
                            </div>
                            <div className="customer-details-inner-items">
                                <SecondaryInputField
                                    type="text"
                                    placeholder="company name"
                                />
                            </div>
                            <div className="customer-details-inner-items">
                                <SecondaryInputField
                                    type="email"
                                    placeholder="email"
                                />
                            </div>

                            <div className="customer-details-inner-items">
                                <SecondaryInputField
                                    type="number"
                                    placeholder="phone number"
                                />
                            </div>
                            <div className="customer-details-inner-items">
                                <SecondaryInputField
                                    type="text"
                                    placeholder="website"
                                />
                            </div>



                        </div>
                    </div>
                    <div className="customer-tap-area">
                        <div className="tap-items"><li>Address</li></div>
                        <div className="tap-items"><li>Contact Person</li></div>
                        <div className="tap-items"><li>Remark</li></div>
                    </div>

                    <div className="customer-address-area">

                        <div className="customer-billing-address-area">
                            <div className="address-heading">
                                <div className="billing-heading">
                                    <label>Billing Address</label>
                                </div>

                            </div>
                            <div className="customer-billing-inner-area">
                                <div className="customer-billing-key">

                                    <label>
                                        Country
                                    </label>
                                    <label>
                                        State
                                    </label>
                                    <label>
                                        City
                                    </label>
                                    <label>
                                        Address 1
                                    </label>
                                    <label>
                                        Address 2
                                    </label>
                                    <label>
                                        Postal Code
                                    </label>
                                    <label>
                                        Phone Number
                                    </label>
                                </div>
                                <div className="customer-billing-value">
                                    <div className="customer-billing-inner-items">
                                        <select>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>

                                        </select>
                                    </div>
                                    <div className="customer-billing-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="state"
                                        />
                                    </div>
                                    <div className="customer-billing-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="city"
                                        />
                                    </div>
                                    <div className="customer-billing-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="address 1"
                                        />
                                    </div>
                                    <div className="customer-billing-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="address 2"
                                        />
                                    </div>
                                    <div className="customer-billing-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="postal code"
                                        />
                                    </div>
                                    <div className="customer-billing-inner-items">
                                        <SecondaryInputField
                                            type="number"
                                            placeholder="phone number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="customer-shipping-address-area">
                        <div className="address-heading">
                                <div className="shipping-heading">
                                    <label>Shipping Address</label>
                                </div>
                                <div className="shipping-inner-checkbox"><input type="checkbox" />copy same address</div>

                            </div>
                            <div className="customer-shipping-inner-area">
                                <div className="customer-shipping-key">

                                    <label>
                                        Country
                                    </label>
                                    <label>
                                        State
                                    </label>
                                    <label>
                                        City
                                    </label>
                                    <label>
                                        Address 1
                                    </label>
                                    <label>
                                        Address 2
                                    </label>
                                    <label>
                                        Postal Code
                                    </label>
                                    <label>
                                        Phone Number
                                    </label>
                                </div>
                                <div className="customer-shipping-value">
                                    <div className="customer-shipping-inner-items">
                                        <select>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>

                                        </select>
                                    </div>
                                    <div className="customer-shipping-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="state"
                                        />
                                    </div>
                                    <div className="customer-shipping-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="city"
                                        />
                                    </div>
                                    <div className="customer-shipping-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="address 1"
                                        />
                                    </div>
                                    <div className="customer-shipping-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="address 2"
                                        />
                                    </div>
                                    <div className="customer-shipping-inner-items">
                                        <SecondaryInputField
                                            type="text"
                                            placeholder="postal code"
                                        />
                                    </div>
                                    <div className="customer-shipping-inner-items">
                                        <SecondaryInputField
                                            type="number"
                                            placeholder="phone number"
                                        />
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-shipping-area">
                                            <MediumButton
                                            button_name="Cancel"
                                             />
                                            <MediumButton 
                                                button_name="Save"
                                            />
                                        </div>
                </div>
               
            </div>
        </>
    )
}
