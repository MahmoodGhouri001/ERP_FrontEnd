import React from 'react'
import {Link} from 'react-router-dom';
import { MdDashboard, MdGroups, MdCategory, MdOutlineProductionQuantityLimits, MdOutlineAddShoppingCart, MdOutlinePayment, MdLogout } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa";
export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="menu">

               <Link to="/" className="link"> <div className="menu-item"><i className="icon-sidebar"><MdDashboard /></i>Dashboard</div></Link>
                <Link to="/customer" className="link"><div className="menu-item"><i className="icon-sidebar"><MdGroups /></i>Customers</div></Link>
               <Link to="/employees"><div className="menu-item"><i className="icon-sidebar"><IoMdPerson /></i> Employees</div></Link>
                <div className="menu-item"><i className="icon-sidebar"><MdCategory /></i>Category</div>
                
                <div className="menu-item"><i className="icon-sidebar"><MdOutlineProductionQuantityLimits /></i> Products</div>
                <div className="menu-item"><i className="icon-sidebar"><MdOutlineAddShoppingCart /></i>Orders</div>
                <div className="menu-item"><i className="icon-sidebar"><FaCodeBranch /></i>Branches</div>
                <div className="menu-item"><i className="icon-sidebar"><MdOutlinePayment /></i>Billing</div>
                <div className="menu-item"><i className="icon-sidebar"><MdLogout /></i>Logout</div>
            </div>
        </div>
    )
}
