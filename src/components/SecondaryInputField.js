import React from 'react'
import './SecondaryInputField.css'
export default function SecondaryInputField(props) {
  return (
    <div className="secondary-input-field">
        <input type={props.type} placeholder={props.placeholder} />
    </div>
  )
}
