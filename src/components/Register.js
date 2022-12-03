import React from 'react';
import InputField from './InputField';
import RegistrationDetails from './RegistrationDetails';
import signup from './signup.svg'
export default function Register() {
    return (
        <div className="Registration-container">
            <div className="registration-page">
                <div className="signup-area">
                    <h2>Connect with us</h2>
                    <div className="signup-input">
                        {RegistrationDetails.map((RegistrationDetails) => <InputField
                            key={RegistrationDetails.id}
                            type={RegistrationDetails.type}
                            placeholder={RegistrationDetails.placeholder}
                        />)}
                    </div>
                    <button type="submit" className="btn btn-signup">Signup</button>
                </div>              
            </div>
            <div className="side-img">
        <img src={signup} alt="" style={{ widht: "1344px", height: "928px" }} />
      </div>
        </div>
    )
}
