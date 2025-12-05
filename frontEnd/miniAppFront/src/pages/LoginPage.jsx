import React, { useState } from 'react'
import Header from '../components/Header'
import LoginCard from '../components/LoginCard'
import Footer from '../components/Footer'
import '../styles/LoginPage.css'

const LoginPage = () => {

  const [selectedLang, setSelectedLang] = useState({
    code: "SE",
    label: "Svenska",
    flag: "/images/SE.png"
  });

  return (
    <div className="login-page">
      <div className="hero-section"
        style={{ backgroundImage: "url('images/sverige43.jpg')" }}>
        <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
        <main className="main-content">
          <LoginCard selectedLang={selectedLang.code} />
        </main>
        <Footer selectedLang={selectedLang}/>
      </div>
    </div>
  )
}

export default LoginPage