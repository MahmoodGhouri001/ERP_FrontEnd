import React from 'react'
import { Link } from 'react-router-dom'
import InputField from './InputField'
import login from './login.svg'
export default function Login() {
  return (
    <div className="Login-container">
      <div className="login-page">
        <div className="login-area">
          <h2>Login to your account</h2>
          <InputField
            type="email"
            placeholder="Email"           
          />
          <InputField
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-login">Login</button>
          <div className="signup-link">
            Didn't have account?<Link to="/register" className="text">Sign up</Link>
          </div>
        </div>

      </div>
      <div className="side-img">
        <img src={login} alt="" style={{ widht: "1344px", height: "928px" }} />
      </div>

    </div>
  )
}
