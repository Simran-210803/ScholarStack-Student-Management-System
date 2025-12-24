import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser({ email, password });

      if (!data.success) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ SAVE AUTH DATA
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // ✅ ROLE-BASED REDIRECT
      if (data.role === "admin") {
        window.location.href = "/admin";
      } else if (data.role === "student") {
        window.location.href = "/student";
      } else {
        setError("Unknown user role");
      }
    } catch (err) {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="auth-wrapper">
      {/* LEFT BRAND */}
      <div className="auth-brand">
        <h1>ScholarStack</h1>
        <p>
          A modern student management system built for institutions & learners.
        </p>

        {/* emojis stay exactly as they are */}
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
      </div>

      {/* RIGHT LOGIN */}
      <div className="login-page">
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">Access your dashboard</p>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p
            className="link-text"
            onClick={() => navigate("/signup")}
          >
            New here? Create account
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
