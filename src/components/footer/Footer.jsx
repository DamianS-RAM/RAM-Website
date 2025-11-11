import React from 'react'
import './Footer.css'
import logo from '@assets/images/logo_ram.webp'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="RAM logo" />
                </div>
                <ul className="footer-list">
                    <li className="footer-item">Home</li>
                    <li className="footer-item">About us</li>
                    <li className="footer-item">Contact us</li>
                    <li className="footer-item">Providers</li>
                </ul>
            </div>
            <div className="footer-line">
                2025 © All rights reserved
            </div>
        </div>
    </>
  )
}

export default Footer