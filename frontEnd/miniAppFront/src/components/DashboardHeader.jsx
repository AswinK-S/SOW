import React from 'react'
import { Menu, LogOut } from 'lucide-react';
import '../styles/DashboardHeader.css';

const DashboardHeader = ({ onMenuToggle, onLogout }) => {
  return (
     <header className="dashboard-header">
      <div className="dashboard-header-container">
        <button 
          className="menu-toggle-button"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <div className="user-profile">
          <div className="user-avatar">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="User Avatar"
              className="avatar-image"
            />
          </div>
          <div className="user-info">
            <h2 className="user-name">John Andre</h2>
            <p className="user-company">Storfjord AS</p>
          </div>
        </div>

        <div className="header-right">
          <span className="language-label">Norsk Bokmål</span>
          <img 
            src="/images/SE.png" 
            alt="Norwegian Flag"
            className="flag-image"
          />
          {onLogout && (
            <button 
              className="logout-button"
              onClick={onLogout}
              aria-label="Logout"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader