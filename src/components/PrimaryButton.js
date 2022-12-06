import React from 'react'
import './PrimaryButton.css'
export default function PrimaryButton(props) {
  return (
    <div className="primary-button">
        <button>{props.button_name}</button>
    </div>
  )
}
