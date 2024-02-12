import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import '../../styles/footer.scss'


type Props = {
  show: boolean
}
const currentYear: number = new Date().getFullYear()
const Footer = ({show}: Props) => {
  return (
    <footer className='footer' style={{display: show ? 'flex' : 'none'}}>
      <div className='top'>
        <div className='logo'>
            <img src="/static/logo/logo-full.png" alt="Quizzo Logo" />
        </div>
        <p>&copy; {currentYear} Quizzo. All rights reserved.</p>
        <p>Powered by React</p>
      </div>
      <div className='social'>
        <a href="https://github.com/darpankattel/quizzo-frontend" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer