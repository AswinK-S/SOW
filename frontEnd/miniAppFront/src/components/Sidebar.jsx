import React, { useState } from 'react';
import { 
  FileText, 
  Users, 
  Building2, 
  BookOpen, 
  DollarSign, 
  Copy, 
  AlertCircle, 
  Tag, 
  Package, 
  CreditCard, 
  Upload, 
  LogOut,
  X
} from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {

    const [activeItem, setActiveItem] = useState('Price List');

  const menuItems = [
    { icon: FileText, label: 'Invoices', color: '#22d3ee' },
    { icon: Users, label: 'Customers', color: '#22d3ee' },
    { icon: Building2, label: 'My Business', color: '#94a3b8' },
    { icon: BookOpen, label: 'Invoice Journal', color: '#94a3b8' },
    { icon: DollarSign, label: 'Price List', color: '#fbbf24' },
    { icon: Copy, label: 'Multiple Invoicing', color: '#22d3ee' },
    { icon: AlertCircle, label: 'Unpaid Invoices', color: '#ec4899' },
    { icon: Tag, label: 'Offer', color: '#fbbf24' },
    { icon: Package, label: 'Inventory Control', color: '#cbd5e1' },
    { icon: CreditCard, label: 'Member Invoicing', color: '#3b82f6' },
    { icon: Upload, label: 'Import/Export', color: '#94a3b8' },
    { icon: LogOut, label: 'Log out', color: '#cbd5e1' },
  ];

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'sidebar-overlay-visible' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3 className="sidebar-title">Menu</h3>
          <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`sidebar-item ${activeItem === item.label ? 'sidebar-item-active' : ''}`}
                onClick={() => setActiveItem(item.label)}
              >
                <Icon size={18} style={{ color: item.color }} />
                <span className="sidebar-item-label">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar