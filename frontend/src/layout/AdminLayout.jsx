import { Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
    const navigate = useNavigate();

    return (
        <div className="admin-layout">
            <aside className="sidebar">
                <h2>ScholarStack</h2>
                <button onClick={() => navigate("/admin")}>Dashboard</button>
                <button onClick={() => navigate("/admin/students")}>Students</button>
                <button onClick={() => navigate("/admin/courses")}>Courses</button>
                <button
                    onClick={() => {
                        localStorage.clear();
                        navigate("/");
                    }}
                >
                    Logout
                </button>
            </aside>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
