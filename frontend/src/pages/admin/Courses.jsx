import { useEffect, useState } from "react";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editingId, setEditingId] = useState(null);

    const token = localStorage.getItem("token");

    const fetchCourses = async () => {
        const res = await fetch("http://localhost:5000/courses", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        const data = await res.json();
        if (data.success) setCourses(data.data);
    };

    useEffect(() => {
        if (token) fetchCourses();
    }, [token]);


    const addOrUpdateCourse = async () => {
        if (!title || !description) {
            alert("Fill all fields");
            return;
        }

        const url = editingId
            ? `http://localhost:5000/courses/${editingId}`
            : "http://localhost:5000/courses";

        const method = editingId ? "PUT" : "POST";

        const res = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify({ title, description }),
        });

        const data = await res.json();

        if (!data.success) {
            alert(data.message || "Something went wrong");
            return;
        }

        setTitle("");
        setDescription("");
        setEditingId(null);
        fetchCourses();
    };


    const startEdit = (course) => {
        setEditingId(course._id);
        setTitle(course.title);
        setDescription(course.description);
    };

    const deleteCourse = async (id) => {
        await fetch(`http://localhost:5000/courses/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        fetchCourses();
    };

    return (
        <div className="dashboard-content">
            <h2>Courses</h2>
            <p>Manage platform courses</p>

            {/* ADD / EDIT FORM */}
            <div className="form-row">
                <input
                    className="input"
                    placeholder="Course title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className="input"
                    placeholder="Course description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button className="btn-primary" onClick={addOrUpdateCourse}>
                    {editingId ? "Update Course" : "Add Course"}
                </button>

                {editingId && (
                    <button
                        className="btn-secondary"
                        onClick={() => {
                            setEditingId(null);
                            setTitle("");
                            setDescription("");
                        }}
                    >
                        Cancel
                    </button>
                )}
            </div>

            {/* COURSE LIST */}
            <div className="list">
                {courses.map((course) => (
                    <div className="list-card" key={course._id}>
                        <div>
                            <h4>{course.title}</h4>
                            <p>{course.description}</p>
                        </div>

                        <div className="course-actions">
                            <button
                                className="btn-edit"
                                disabled={editingId && editingId !== course._id}
                                onClick={() => startEdit(course)}
                            >
                                ✏️ Edit
                            </button>

                            <button
                                className="btn-danger"
                                onClick={() => deleteCourse(course._id)}
                            >
                                🗑 Delete
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
