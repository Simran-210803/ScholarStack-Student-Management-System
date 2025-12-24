import { useEffect, useState } from "react";
import { getAllCourses } from "../../api/api";
import { useNavigate } from "react-router-dom";

function AllCourses() {
    const [courses, setCourses] = useState([]);
    const [enrolledIds, setEnrolledIds] = useState([]); // ✅ FIX
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await getAllCourses(token);
            if (res.success) setCourses(res.data);
        };

        fetchCourses();
    }, [token]);

    const enroll = async (id) => {
        const res = await fetch(`http://localhost:5000/enroll/${id}`, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token,
            },
        });

        const data = await res.json();

        if (data.success) {
            setEnrolledIds((prev) => [...prev, id]);
        } else {
            alert(data.message || "Already enrolled");
        }
    };

    return (
        <div className="dashboard-page">
            {/* Header */}
            <header className="dashboard-header">
                <div className="flex-between">
                    <h1>All Courses</h1>

                    <button
                        className="btn btn-outline"
                        onClick={() => navigate("/student")}
                    >
                        ← Back to Dashboard
                    </button>
                </div>
            </header>

            {/* Courses */}
            <div className="courses-grid">
                {courses.map((course) => (
                    <div className="course-card" key={course._id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>

                        <button
                            className={`btn ${enrolledIds.includes(course._id)
                                    ? "btn-secondary"
                                    : "btn-primary"
                                }`}
                            disabled={enrolledIds.includes(course._id)}
                            onClick={() => enroll(course._id)}
                        >
                            {enrolledIds.includes(course._id) ? "Enrolled" : "Enroll"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllCourses;
