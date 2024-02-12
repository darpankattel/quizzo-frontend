import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function Header({}: Props) {
  return (
    <header className='header'>
        <div className='detail'>
            <h1 className='title'>Quizzo</h1>
            <h2 className='subtitle'>Showcase your knowledge</h2>
            <p className='description'>
                Best Online Quiz Platform
            </p>
            <Link to="/profile" className='button button-focus'>View Profile</Link>
        </div>
        <div className='illustration'>
            <img src="/static/images/lady-copy.jpg" alt="Quiz Illustration" />
        </div>
    </header>
  )
}

export default Header