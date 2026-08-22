# 🌟 STEM for Super Girls

A modern, responsive, and fully featured web platform built to promote STEM education for girls through courses, workshops, events, publications, and community engagement.

This project showcases a youth-led initiative designed to inspire, educate, and empower girls to explore science, technology, engineering, and mathematics in an accessible and engaging way.

---

<img width="1080" height="1080" alt="1" src="https://github.com/user-attachments/assets/7a7b028c-3e6c-452b-9769-915d51b4e874" />

## 🌐 Live Demo

- **Frontend:** https://stem-for-super-girls-ad869.web.app/
- **Backend API:** https://stem-server.onrender.com
- **Detailed Client Repo:** https://github.com/saheen-shuvo/edTech-client
- **Detailed Server Repo:** https://github.com/saheen-shuvo/edTech-server
---

## 🔑 Demo Admin Credentials

Use these credentials to test the admin dashboard:

- **Email:** `shahneaz@gmail.com`
- **Password:** `123456`

> Note: These credentials are intended for demo/testing purposes only.

---

## 📌 Project Overview

STEM for Super Girls is a full-stack educational platform focused on:

- promoting STEM learning for girls
- showcasing courses and learning resources
- highlighting events, workshops, and publications
- allowing users to register, log in, and manage their account
- providing an admin dashboard for content and user management

The application includes both a public-facing website and a role-based dashboard system for users and admins.

---

## ✨ Key Features

<img width="1080" height="1080" alt="2" src="https://github.com/user-attachments/assets/b2fe5fdf-42ef-426c-a793-dfb563120814" />

<img width="1080" height="1080" alt="3" src="https://github.com/user-attachments/assets/24c193d4-6db4-4d9b-b253-e00dc16b980b" />

<img width="1080" height="1080" alt="4" src="https://github.com/user-attachments/assets/9ddba181-3c07-409d-b271-161b2e953196" />

### Public Website
- Attractive landing page with mission-driven content
- About Us section
- Our Works / community impact section
- Courses listing with category filtering
- Course details view
- Publications section
- Join the Purpose page
- Responsive navigation and footer

### Authentication & User Account
- Firebase authentication
- User registration and login
- Password reset support
- Role-based redirection after login
- User account area with profile, courses, purchase history, and messages

<img width="1080" height="1080" alt="5" src="https://github.com/user-attachments/assets/74609d1f-73b3-4aaa-a28e-240600c7682a" />

### Admin Dashboard
- Admin-only dashboard access
- Add new courses
- Manage existing courses
- Add events
- Manage events
- View all messages
- View all users

### UI/UX
- Fully responsive design
- Modern component-based layout
- Smooth animations and interactive elements
- Toast notifications and alert dialogs
- Clean dashboard experience for both users and admins

---

## 🧱 Tech Stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- DaisyUI
- React Hook Form
- Axios
- React Query
- Framer Motion
- Lottie React
- React Toastify
- SweetAlert2
- Firebase Authentication

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Hosting / Deployment
- Firebase Hosting for frontend
- Render/Vercel-style hosted backend API

---

## 🏗️ Project Structure

The repo is split into two major parts:

```text
stem-client/   → React frontend
stem-server/   → Express + MongoDB backend
```

### Frontend Structure
- `src/main.jsx` – app bootstrap and provider setup
- `src/router/router.jsx` – route definitions
- `src/layouts/RootLayout.jsx` – shared public layout
- `src/pages/` – all public pages, user dashboard pages, and admin dashboard pages
- `src/context/` – authentication context and state management
- `src/hooks/` – custom hooks, including Axios helpers
- `src/assets/` – images, animations, and UI assets

### Backend Structure
- `index.js` – Express app entry point
- MongoDB collections used:
  - `courses`
  - `enrolledCourses`
  - `users`
  - `events`
  - `messages`
  - `reviews`

---

## 🛣️ Routing Overview

### Public Routes
- `/` – Home
- `/about-us`
- `/our-works`
- `/courses`
- `/courses/:id`
- `/publications`
- `/join-the-purpose`
- `/log-in`
- `/register`

### User Routes
- `/my-account`
- `/user-home`
- `/course-recommendation`

### Admin Routes
- `/admin-dashboard`
- `/admin-dashboard/addCourses`
- `/admin-dashboard/manageCourses`
- `/admin-dashboard/addEvents`
- `/admin-dashboard/manageEvents`
- `/admin-dashboard/all-messages`
- `/admin-dashboard/all-users`

---

## 🔐 Authentication & Role Handling

This project uses Firebase Authentication for sign-in and sign-up.

After login:
1. the user signs in with Firebase
2. the app checks the user role from the backend
3. admin users are redirected to `/admin-dashboard`
4. regular users are redirected to `/user-home`

This role-based flow makes it easy to separate admin and user experiences.

---

## 📡 Backend API Overview

The backend is built with Express and MongoDB and exposes REST-style endpoints for:

- user management
- courses management
- event management
- messages
- reviews
- MongoDB connection verification

Example:
- `GET /api/mongo-status`
- `GET /users/all`
- `GET /users/role/:email`
- `POST /users`

---

## 🎯 Purpose

The goal of this platform is to:

- increase awareness of STEM education for girls
- provide a trusted learning and engagement space
- support community-based educational outreach
- give administrators tools to manage content efficiently

---

## 👨‍💻 My Role

I handled the full development of the project, including:

- UI/UX implementation
- responsive frontend development
- authentication and routing
- backend integration
- dashboard structure
- performance and usability improvements

---

## 🚀 Getting Started

### Frontend
```bash
cd stem-client
npm install
npm run dev
```

### Backend
```bash
cd stem-server
npm install
npm run dev
```

---

## ⚙️ Environment Variables

The backend requires environment variables such as database credentials.

Example:
.env
PORT=5001
DB_PASS=your_mongodb_password
DB_USER=your_mongodb_username

The frontend may also require Firebase configuration in its auth setup files.

---

## 📷 Screenshots
Add screenshots of:
- Home page
- Courses page
- Login page
- User dashboard
- Admin dashboard

---

## ⭐ Support

If you like this project, please consider starring the repository.

Your support helps highlight initiatives that empower girls through STEM education.
