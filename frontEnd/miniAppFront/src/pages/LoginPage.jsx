import React from 'react'
import Header from '../components/Header'
import LoginCard from '../components/LoginCard'
import Footer from '../components/Footer'
import '../styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="hero-section"
        style={{ backgroundImage: "url('images/sverige43.jpg')" }}>
        <Header />
        <main className="main-content">
          <LoginCard />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default LoginPage