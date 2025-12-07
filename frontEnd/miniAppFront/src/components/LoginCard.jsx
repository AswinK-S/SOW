import React, { useState } from "react";
import "../styles/LoginCard.css";
import { Eye, EyeOff } from "lucide-react";
import useTranslations from "../hooks/useTranslations";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

const LoginCard = ({ selectedLang }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const translations = useTranslations(selectedLang);
  const navigate = useNavigate();

  if (!translations) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("data :",data)

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }

   

    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="login-card">
      <h1 className="login-title">{translations["login.title"]}</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            {translations["login.email"]}
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
            {translations["login.password"]}
          </label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <button type="submit" className="login-button">
          {translations["login.button"]}
        </button>

        <div className="login-footer">
          <a href="#register" className="footer-link">
            Register
          </a>
          <a href="#forgot-password" className="footer-link">
            Forgotten password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
