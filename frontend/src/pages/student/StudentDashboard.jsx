import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyCourses } from "../../api/api";

function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getMyCourses();

      if (data.success) {
        setCourses(data.data);
      }

      setLoading(false);
    };

    fetchCourses();
  }, []);

  return (
    <div className="dashboard-page">
      {/* Emoji Background */}
      <div className="floating-emojis">
        <span style={{ left: "5%", animationDuration: "22s" }}>📚</span>
        <span style={{ left: "10%", animationDuration: "28s" }}>🎓</span>
        <span style={{ left: "15%", animationDuration: "24s" }}>✏️</span>
        <span style={{ left: "20%", animationDuration: "30s" }}>📖</span>
        <span style={{ left: "25%", animationDuration: "26s" }}>🧠</span>
        <span style={{ left: "30%", animationDuration: "32s" }}>📓</span>
        <span style={{ left: "35%", animationDuration: "27s" }}>🎒</span>
        <span style={{ left: "40%", animationDuration: "23s" }}>📐</span>

        <span style={{ left: "50%", animationDuration: "29s" }}>📕</span>
        <span style={{ left: "55%", animationDuration: "25s" }}>📘</span>
        <span style={{ left: "60%", animationDuration: "31s" }}>📝</span>
        <span style={{ left: "65%", animationDuration: "27s" }}>📎</span>
        <span style={{ left: "70%", animationDuration: "24s" }}>📒</span>
        <span style={{ left: "75%", animationDuration: "30s" }}>📙</span>
        <span style={{ left: "80%", animationDuration: "26s" }}>📚</span>
        <span style={{ left: "85%", animationDuration: "33s" }}>🎓</span>
        <span style={{ left: "90%", animationDuration: "28s" }}>✍️</span>
        <span style={{ left: "95%", animationDuration: "22s" }}>📖</span>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="flex-between">
            <div>
              <h1>My Dashboard</h1>
              <p>Track your enrolled courses and learning progress</p>
            </div>

            <div className="dashboard-actions">
              
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/student/courses")}
              >
                📚 All Courses
              </button>

              <button
                className="btn btn-outline"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>📚 Enrolled Courses</h3>
            <p className="stat-number">{courses.length}</p>
          </div>

          <div className="stat-card">
            <h3>🎓 Completed</h3>
            <p className="stat-number">0</p>
          </div>
        </div>

        {/* Courses */}
        <section className="courses-section">
          <h2>My Courses</h2>

          {loading && <p>Loading courses...</p>}

          {!loading && courses.length === 0 && (
            <p className="empty-text">No courses enrolled yet.</p>
          )}

          <div className="courses-grid">
            {courses.map((item) => (
              <div className="course-card" key={item._id}>
                <h3>{item.course.title}</h3>
                <p>{item.course.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentDashboard; 