import React from 'react'
export default function Dashboard(props) {
  return (
    <div className="Dashboard-container">
    <h2 className="h2">Dashboard</h2>
      <div className="card-container">
        <div className="dashboard-card">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <div className="more-info">
           <label >{props.info}</label> 
            <i className="icon-arrow">{props.svg}</i>
          </div>
        </div>                        
      </div>
    </div>
  )
}
