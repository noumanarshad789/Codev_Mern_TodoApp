import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
  return (
    <div>
      <div className="form-container">
        <div className="form">
          <div className="icon mb-3">
            <i className="fa-solid fa-circle-user"></i>
          </div>
          <div className="mb-3">
            <input type="email" placeholder='Email' className='form-control' />
          </div>
          <div className="mb-3">
            <input type="password" placeholder='Password' className='form-control' />
          </div>

          <div className="form-bottom">
            <p className='text-center'>not a user? please
              <Link to="/register">Register</Link>
            </p>
            <button type='submit' className='login-btn'>Login</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
