import React from 'react'
import { Link } from 'react-router-dom'
import "../login/login.css"
import "./signup.css"
export default function Signup() {
  return (
    <div>
        <div className="login-container">
            <div className="signup-box">
                <div className="login-title">Create Account</div>
                <div className="input-container">
                    <div className="input-title">First Name:</div>
                    <input type= "email" placeholder= "Enter first name" className="input-field" />
                </div><div className="input-container">
                    <div className="input-title">Last Name:</div>
                    <input type= "email" placeholder= "Enter last name" className="input-field" />
                </div>
                <div className="input-container">
                    <div className="input-title">Email:</div>
                    <input type= "email" placeholder= "Enter email" className="input-field" />
                </div>
                <div className="input-container">
                    <div className="input-title">Password:</div>
                    <input type= "password" placeholder= "Enter password" className="input-field" />
                </div>
                <button className="input-login-btn">Create account</button>
               <Link to = "/login"><div className="create-account-link">Login instead</div></Link>
            </div>
        </div>
    </div>
  )
}
