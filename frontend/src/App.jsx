import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

import StudentLayout from "./layout/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import AllCourses from "./pages/student/AllCourses";

import AdminLayout from "./layout/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Students from "./pages/admin/Students";
import Courses from "./pages/admin/Courses";

function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <Routes>
      {/* AUTH */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* STUDENT */}
      <Route
        path="/student"
        element={
          token && role === "student"
            ? <StudentLayout />
            : <Navigate to="/" />
        }
      >
        <Route index element={<StudentDashboard />} />
        <Route path="courses" element={<AllCourses />} />
      </Route>

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          token && role === "admin"
            ? <AdminLayout />
            : <Navigate to="/" />
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="courses" element={<Courses />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
