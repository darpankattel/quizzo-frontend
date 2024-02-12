import React from 'react'
import { Link } from 'react-router-dom'
import { CiUser, CiLock } from "react-icons/ci";
import "../styles/login.scss"


type Props = {}

function Login({}: Props) {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })
  return (
    <div className='login-container'>
      <div className='login'>
        <h1 className='title'>Login</h1>
        <form className='login-form'>
          <div className='input-container'>
            <label htmlFor="email">Email</label>
            <div className='input'>
              <CiUser />
              <input type="email" id="email" onChange={(e) => setForm({...form, email: e.target.value})} value={form.email} placeholder='username@example.com' />
            </div>
          </div>
          <div className='input-container'>
            <label htmlFor="password">Password</label>
            <div className='input'>
              <CiLock />
              <input type="password" id="password" onChange={(e) => setForm({...form, password: e.target.value})} value={form.password} />
            </div>
            <Link to="/forgot-password" className='forgot-password'>Forgot Password?</Link>
          </div>
          <button className='button login-button'>Login</button>
        </form>
        <div className='social-login'>
          <hr />
          <p>or login with</p>
          <div className='social-icons'>
            <Link to="/"><img src="/static/images/google-logo.png" alt="Google Icon" width={20} style={{verticalAlign: 'middle', marginRight: '10px'}} />Sign in with Google</Link>
          </div>
        </div>
        <div className='create-account'>
          <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
        </div>
      </div>  
    </div>
  )
}

export default Login