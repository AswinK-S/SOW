import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import ProductTable from '../components/ProductTable';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <div className="dashboard-page">
      <DashboardHeader 
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        onLogout={onLogout} 
      />
      <div className="dashboard-container">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        <main className="dashboard-main">
          <ProductTable />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
