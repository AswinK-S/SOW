import React,{useState} from 'react'
import '../styles/LoginCard.css'
import {Eye, EyeOff} from 'lucide-react'

const LoginCard = () => {
     
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] =useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Login submitted:', {email, password})
    }
    return (
        <div className="login-card">
            <h1 className="login-title">Log in</h1>

            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Enter your email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        Enter your password
                    </label>
                    <div className="password-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="form-input"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={()=>setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                </div>
                <button type="submit" className="login-button">
                Log in
                </button>

                <div className="login-footer">
                    <a href="#register" className="footer-link">
                        Register
                    </a>
                    <a href="#forgot-password" className="footer-link">
                        Forgotten password?
                    </a>
                </div>

            </form >
        </div >
    )
}

export default LoginCard