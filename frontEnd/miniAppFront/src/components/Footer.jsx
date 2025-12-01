import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2 className="footer-title">123 Fakturera</h2>
                </div>

                <nav className="footer-nav">
                    <a href="#home" className="footer-link">Home</a>
                    <a href="#order" className="footer-link">Order</a>
                    <a href="#contact" className="footer-link">Contact us</a>
                </nav>
            </div>

            <div className="footer-copyright">
                <p>© Låttfaktura, CRO no. 638637, {currentYear}. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer