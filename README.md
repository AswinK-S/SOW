# 🧾 SOW – Mini Invoice & Price List Application

This repository contains a **full-stack mini invoice & price list application** built with **React (Frontend)** and **Node.js + Express + PostgreSQL (Backend)**.  
It includes authentication, dashboard, product price list, and multi-language support (English & Swedish).

---

## 📁 Project Structure


---

## 🚀 Tech Stack

### ✅ Frontend
- **React** (v18+)
- **JavaScript (ES6+)**
- **Vite**
- **React Router DOM v6**
- **CSS (No external UI framework)**
- **lucide-react (icons)**
- **Fetch API for HTTP requests**

### ✅ Backend
- **Node.js**
- **Express.js**
- **PostgreSQL (psql)**
- **JWT Authentication**
- **bcrypt (password hashing)**
- **dotenv (environment variables)**
- **pg (PostgreSQL client)**

---

## 🔐 Authentication Flow

1. User logs in using **email & password**
2. Backend returns a **JWT token**
3. Token is stored in **localStorage**
4. Protected routes require the token
5. On logout, token is removed and user is redirected to `/login`

---

## 🌍 Language & Translation System

- Supported languages:
  - 🇬🇧 English (EN)
  - 🇸🇪 Swedish (SE)

- Translations are fetched from:
GET /api/auth/translations


- If backend is offline:
✅ App automatically switches to **local translation fallback**

- **Default language:** Swedish (SE)

---

## 📦 Product Price List

- Backend API:
- GET /api/pricelist

- Protected using:
- authMiddleware


- If backend is offline:
✅ App displays **dummy product data**

---

## 🔗 API Endpoints Summary

### ✅ Auth

POST /api/auth/login
GET /api/auth/translations
GET /api/pricelist (Protected)


---

## 🖥️ Local Development Setup

### ✅ 1. Clone the Repository


git clone https://github.com/AswinK-S/SOW.git
cd SOW


## 2. Backend Setup

cd backend
npm install
npm start

## Create .env file inside backend:

PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=aswin_db
JWT_SECRET=your_secret_key

## 3. Frontend Setup

cd ../frontend/miniAppFrontend
npm install
npm run dev



