import React from 'react'

export default function CustomerCard(props) {
  return (
    <div className="customer-card">
    <div className="customer-details-area">
      <div className="customer-img">
        <img src={props.profile} alt="" />
      </div>
      <div className="customer-info">
        <h3>{props.customer_name}</h3>
        <p> <i>{props.hashtag_icon}</i>{props.customer_id}</p>
        <p><i>{props.mobile_icon}</i>{props.customer_mobile}</p>
        <p><i>{props.email_icon}</i> {props.customer_email}</p>
      </div>
    </div>
    <div className="customer-info-more">
      <div className="last-order">
        <h4>{props.order_date}</h4>
        <span>{props.status}</span>
      </div>
      <div className="total-orders">
        <h4>{props.total_order}</h4>
        <span>{props.order_title}</span>
      </div>

    </div>
  </div>      
  )
}
