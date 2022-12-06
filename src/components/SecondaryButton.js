import React from 'react';
import { HiOutlineUserAdd } from 'react-icons/hi';
import './SecondaryButton.css';
export default function SecondaryButton(props) {
  return (
    <div className="secondary-button">
        <button><i><HiOutlineUserAdd /></i>  {props.button_name}</button>
    </div>
  )
}
