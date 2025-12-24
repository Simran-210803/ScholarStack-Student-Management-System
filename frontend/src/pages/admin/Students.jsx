import { useEffect, useState } from "react";

function Students() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await fetch("http://localhost:5000/admin/students", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });

                const data = await res.json();

                if (data.success) {
                    setStudents(data.data);
                }
            } catch (err) {
                console.error("Failed to load students", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, [token]);

    return (
        <div className="dashboard-content">
            <h2 className="page-title">Students</h2>
            <p className="page-subtitle">
                View all registered students and their enrollments
            </p>

            <div className="students-grid">
                {students.map((student) => (
                    <div className="student-card" key={student._id}>
                        <div className="student-header">
                            <div className="avatar">
                                {student.name.charAt(0).toUpperCase()}
                            </div>

                            <div>
                                <h3>{student.name}</h3>
                                <p className="email">{student.email}</p>
                            </div>

                            <span className="course-count">
                                {student.totalCourses} Courses
                            </span>
                        </div>

                        <div className="student-meta">
                            <span>
                                Joined:{" "}
                                {student.joinedAt
                                    ? new Date(student.joinedAt).toLocaleDateString()
                                    : "—"}
                            </span>
                        </div>

                        <div className="courses-wrap">
                            {student.courses.length > 0 ? (
                                student.courses.map((course) => (
                                    <span className="course-pill" key={course._id}>
                                        {course.title}
                                    </span>
                                ))
                            ) : (
                                <span className="no-courses">No courses enrolled</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Students;
