import React from 'react';
import './MediumButton.css';
export default function SecondaryButton(props) {
  return (
    <div className="medium-button">    
      <button>{props.add_icon}{props.button_name}</button>
    </div>
  )
}
