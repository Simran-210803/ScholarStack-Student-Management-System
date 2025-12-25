# ScholarStack – Student Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

**ScholarStack** is a full-stack **Student Management System** designed to streamline student enrollment, course management, and role-based access for students and administrators.
Built using the **MERN stack**, the platform provides secure authentication, modern UI, and structured data management.

---

## Key Features

- Authentication & Authorization
- Secure JWT-based authentication
- Role-based access:
  - Admin
  - Student
- Password hashing using bcrypt

---

## Student Module

- Student registration & login
- View enrolled courses
- Enroll in available courses
- Dashboard showing course count and details
- Profile information (Name, Age, City, Email)

---

## Admin Module

- Admin login
- View all registered students
- View student enrollment details
- Add, edit, delete courses
- Dashboard analytics:
  - Total students
  - Total courses

---

## Course Management

- Create courses (Admin only)
- Edit courses
- Delete courses
- Fetch all courses
- Student enrollment tracking

---

## UI / UX

- Clean and modern design
- Responsive layout
- Split authentication layout
- Floating emoji background for visual appeal
- Reusable UI components (buttons, inputs, cards)

---

## Tech Stack (Technologies Used)

**Frontend**

- React.js
- React Router
- CSS (Custom Design System)
- Fetch API

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

## System Architecture

The ScholarStack system follows a **client–server architecture**:

- **Frontend (React)** communicates with the backend using REST APIs.
- **Backend (Node.js + Express)** handles authentication, authorization, and business logic.
- **MongoDB** stores users, courses, and enrollment data.
- **JWT** is used for stateless authentication.
- **Role-Based Access Control (RBAC)** ensures restricted access for admins and students.

**Flow:**
Frontend → API Request → JWT Verification → Controller → Database → Response

---

## Project Structure

```
ScholarStack-Student-Management-System/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .env.example
├── .gitignore
├── LICENSE
├── README.md
├── package.json
└── package-lock.json

```

### Folder Overview

- **backend/** – Node.js + Express REST API (MVC structure)
- **frontend/** – React (Vite) based user interface
- **.env.example** – Sample environment variables (no secrets exposed)
- **.gitignore** – Prevents sensitive and unnecessary files from being pushed

---

## API Endpoints (Sample)

### Authentication

- `POST /api/auth/signup` – Register student
- `POST /api/auth/login` – Login user

### Student

- `GET /api/student/dashboard`
- `GET /api/student/courses`
- `POST /api/student/enroll/:courseId`

### Admin

- `GET /api/admin/students`
- `POST /api/admin/course`
- `PUT /api/admin/course/:id`
- `DELETE /api/admin/course/:id`

---

## Security Practices

- Passwords are hashed using **bcrypt**
- JWT tokens are signed using a secret stored in environment variables
- Sensitive files (`.env`, `node_modules`) are excluded via `.gitignore`
- Role-based middleware protects admin routes
- Backend secrets are never pushed to GitHub

---

## Environment Variables

Create a .env file inside the backend folder:

```

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

```

**Note:** Replace your_mongodb_connection_string_here with your actual connection link.

- For MongoDB Atlas, use your cluster connection string.
- For MongoDB Compass (local), use something like mongodb://127.0.0.1:27017/studentDB.

---

## How to Run the Project

- Backend

```
cd backend
npm init -y  #creates a package.json file
npm install
npm run dev
```

- Frontend

```
cd frontend
npm init -y  #creates a package.json file
npm install
npm start
```

---

## Deployment

### Backend Deployment (Render)

- Backend deployed as a **Node Web Service**
- Root directory set to `backend`
- Environment variables configured in Render dashboard
- Auto-deployment enabled on GitHub push

### Frontend Deployment (Optional)

- Frontend can be deployed on **Vercel / Netlify**
- Backend API base URL updated to Render endpoint

---

## Default Roles

1. Student:

- Signup via UI
- Automatically assigned student role

2. Admin

- Must be created manually in MongoDB or seeded
- Role set as "admin"

---

## Database Models

- User
- name
- age
- city
- email
- password (hashed)
- role (admin/student)
- timestamps
- Course
- title
- description
- Enrollment
- student reference
- course reference

---

## Future Enhancements

- Student profile editing
- Course progress tracking
- Admin analytics dashboard
- Pagination & search
- Password reset functionality

---

## 🌐 **Live Demo**

- **Backend (Render Hosted)**: [https://scholarstack-student-management-system.onrender.com](https://scholarstack-student-management-system.onrender.com)
  _(This is the live API endpoint — Routes can be directly tested in Postman using this base URL)_

---

## **License**

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with proper attribution.

---

## **Author**

**Simranpreet Kaur**

- _ScholarStack-Student Management System — Major Project_
- simranpreet4248@gmail.com
- [GitHub](https://github.com/Simran-210803)
