import React, { useState } from 'react'
import Header from '../components/Header'
import LoginCard from '../components/LoginCard'
import Footer from '../components/Footer'
import '../styles/LoginPage.css'

const LoginPage = () => {

  const [selectedLang, setSelectedLang] = useState({
    code: "EN",
    label: "English",
    flag: "/images/GB.png"
  });

  return (
    <div className="login-page">
      <div className="hero-section"
        style={{ backgroundImage: "url('images/sverige43.jpg')" }}>
        <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
        <main className="main-content">
          <LoginCard selectedLang={selectedLang.code} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default LoginPage