import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ students: 0, courses: 0 });

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/admin/stats", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.data);
        }
      });
  }, []);

  return (
    <div className="dashboard-content">
      <h2>Admin Panel</h2>
      <p>Manage students and courses</p>

      <div className="stats-grid">
        <div
          className="stat-card clickable"
          onClick={() => navigate("/admin/students")}
        >
          <h3>👩‍🎓 Students</h3>
          <h1>{stats.students}</h1>
          <p>Registered students</p>
        </div>

        <div
          className="stat-card clickable"
          onClick={() => navigate("/admin/courses")}
        >
          <h3>📚 Courses</h3>
          <h1>{stats.courses}</h1>
          <p>Total courses</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
