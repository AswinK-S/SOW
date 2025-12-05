import React from 'react'
import '../styles/Footer.css'
import useTranslations from '../hooks/useTranslations'

const Footer = ({ selectedLang }) => {
    const currentYear = new Date().getFullYear()

    

    const translations = useTranslations(selectedLang.code || "SE");

   const footerItems = [
    translations?.['header.home'],
    translations?.['header.order'],
    translations?.['header.contact'] 
  ]

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2 className="footer-title">123 Fakturera</h2>
                </div>

               <nav className="footer-nav">
                {footerItems.map((item,index)=>(
                    <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="footer-link"
                    >
                        {item}
                    </a>
                ))

                }
               </nav>
            </div>

            <div className="footer-copyright">
                <p>© Låttfaktura, CRO no. 638637, {currentYear}. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer