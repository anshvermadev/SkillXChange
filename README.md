<h1 align="center">🔄 SkillXChange – A Skill-Swapping Platform</h1>

<p align="center">
  <em>Exchange Skills. Learn Together. Grow Together.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React.js-%2361DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-%2306B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-%23FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
</p>
<p align="center">
  <a href="https://skillxchanged.netlify.app/">
    <strong>🔗Live Demo</strong>
  </a>
</p>

## 🌐 Overview

**SkillXChange** is a web-based platform that empowers users to **swap skills and services** directly — without involving money. It helps connect individuals based on **skills and learning needs** for mutual collaboration and growth.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure Firebase login & registration
- 🧭 **Dynamic Routing** – New users → profile setup, returning → dashboard
- 🤝 **Skill Matchmaking** – Send/receive requests based on listed skills
- 💬 **Live Chat** – Real-time messaging for matched users
- 🧭 **Responsive Navbar** – Navigation adjusts based on login status
- 🛠️ **Admin Control Panel** – Admin access via pre-approved UIDs

---

## 👨‍💻 Team Members

| Name | GitHub |
|------|--------|
| Mit Gandhi | [@Mit-Gandhi](https://github.com/Mit-Gandhi) |
| Rishit Srivastava | [@rishitsrivastav](https://github.com/rishitsrivastav) |
| Ansh Verma | [@verma07ansh](https://github.com/verma07ansh) |

---

## 🧰 Tech Stack

### 🖥️ Frontend
| Technology | Logo |
|-----------|------|
| React.js | <img src="https://img.icons8.com/color/48/000000/react-native.png" height="24"/> |
| Vite.js | <img src="https://vitejs.dev/logo.svg" height="24"/> |
| Tailwind CSS | <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" height="24"/> |
| Firebase Auth | <img src="https://img.icons8.com/color/48/000000/firebase.png" height="24"/> |

### 🗄️ Backend
| Technology | Logo |
|-----------|------|
| Firebase Firestore | <img src="https://img.icons8.com/color/48/000000/firebase.png" height="24"/> |

---

## 🛠️ Installation & Setup

### 📦 Clone the Repository

```bash
git clone https://github.com/rishitsrivastav/SkillXChange.git
cd SkillXChange
```

### ▶️ Start the Frontend

```bash
npm install
npm run dev
```

> ⚠️ Ensure your Firebase project credentials are set correctly in `.env` file

---

## 🔄 System Workflow

### 👤 User Authentication 

- New users go to `/profile-setup` to complete name, skills, interests
- Returning users go to `/home` after UID + profile validation
- Admin access checked using UID whitelist

---

### 🧭 Navbar Logic

| State | Left | Center | Right |
|-------|------|--------|-------|
| Logged Out | Logo + App Name | – | Login / Signup |
| Logged In | Logo + SkillXChange | Requests, Messages | Profile Pic + Name + Logout |

---

### 🤝 Skill Exchange

- Users browse available skills
- Send/receive requests for swaps
- Manage accepted or pending exchanges

---

### 💬 Chat System

- Each accepted exchange opens a dedicated chat room
- Messages are stored in Firebase Firestore with timestamps

---

### 🛡️ Admin Access

- Admin dashboard available to pre-authorized UIDs
- View all users, exchanges, and handle reports

---

## 📸 Preview

![1](https://github.com/user-attachments/assets/007eebca-558a-4a97-87a4-d9e6c4467631)

![2](https://github.com/user-attachments/assets/181ecbfc-1b44-4c03-a9a6-e13b6d6bd227)

![3](https://github.com/user-attachments/assets/35847658-131b-4f72-8a93-7e69c7c8252f)

![4](https://github.com/user-attachments/assets/c826c749-984c-4f13-99f1-8adb186e253b)

<img width="1646" height="866" alt="5" src="https://github.com/user-attachments/assets/b26d4122-7d32-4d1a-bd69-ad3a56293d01" />

<img width="1250" height="927" alt="6" src="https://github.com/user-attachments/assets/da4b73bf-5264-47a0-984c-c8336e543ed3" />


---

## 💡 Contribution & Support

We welcome contributions, feature suggestions, and bug reports!  
Feel free to fork the repo and open a Pull Request 🚀

---
