import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { FaSearchDollar } from "react-icons/fa";
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="app-logo">
                <Link to="/" className="link"><span> Inventory manager</span></Link>
            </div>
            <div className="search-bar">
                <FaSearchDollar />
                <input type="text" name="" id="" placeholder='Search' />
            </div>
            <div className="span-area">
                <Link to="/login" className="link"><span> Login/Register</span></Link>
                <Link to="/profile" className="link"><span> Welcome User</span></Link>

            </div>
            <div className="icon-profile">
                <VscAccount className="account-icon" />
            </div>

        </div>
    )
}
