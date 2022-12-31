import React from 'react';
import './ProductList.css';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductTable from '../components/ProductTable';
import SecondaryInputField from '../components/SecondaryInputField'
import SecondaryButton from '../components/MediumButton';
export default function ProductList() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="product-list-container">
                <div className="product-top-nav">
                    <div className="product-heading">
                        <h2>Product List</h2>
                    </div>
                    <div className="product-nav-items">
                        <SecondaryInputField
                            type="text"
                            placeholder="Search"
                        />
                        <Link to="/add-product">
                        <SecondaryButton
                            button_name="Add Product"
                        />
                        </Link>

                    </div>
                </div>
                <div className="product-table-container">
                <ProductTable 
                    productname="Product Name"
                    productcode="Product Code"
                    category="Category"
                    price="Price"
                    quantity="Quantity"
                    stockstatus="Stock Status"
                    productimage="Product Image"
                    
                />

                </div>
            </div>
        </>
    )
}
