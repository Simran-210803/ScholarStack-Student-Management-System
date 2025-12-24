// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         setError("");
//         setLoading(true);

//         try {
//             const res = await fetch("http://localhost:5000/auth/signup", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     password,
//                     role: "student", // ✅ default student
//                 }),
//             });

//             const data = await res.json();

//             if (data.success) {
//                 alert("Account created! Please login.");
//                 navigate("/");
//             } else {
//                 setError(data.message || "Signup failed");
//             }
//         } catch {
//             setError("Server error. Try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="auth-wrapper">
//             {/* LEFT BRAND */}
//             <div className="auth-brand">
//                 <h1>ScholarStack</h1>
//                 <p>
//                     Join a modern student management system built for institutions & learners.
//                 </p>

//                 {/* EMOJI BACKGROUND (same as login) */}
//                 <div className="floating-emojis">
//                     <span style={{ left: "5%", animationDuration: "22s" }}>📚</span>
//                     <span style={{ left: "15%", animationDuration: "28s" }}>🎓</span>
//                     <span style={{ left: "25%", animationDuration: "24s" }}>✏️</span>
//                     <span style={{ left: "35%", animationDuration: "30s" }}>📖</span>
//                     <span style={{ left: "45%", animationDuration: "26s" }}>🧠</span>
//                     <span style={{ left: "55%", animationDuration: "32s" }}>📓</span>
//                     <span style={{ left: "65%", animationDuration: "27s" }}>🎒</span>
//                     <span style={{ left: "75%", animationDuration: "23s" }}>📐</span>
//                     <span style={{ left: "85%", animationDuration: "29s" }}>📘</span>
//                 </div>
//             </div>

//             {/* RIGHT SIGNUP */}
//             <div className="login-page">
//                 <div className="login-card">
//                     <h2 className="login-title">Create Account</h2>
//                     <p className="login-subtitle">Start your learning journey</p>

//                     {error && <p style={{ color: "red" }}>{error}</p>}

//                     <form onSubmit={handleSignup}>
//                         <input
//                             className="input"
//                             type="text"
//                             placeholder="Full Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />

//                         <input
//                             className="input"
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />

//                         <input
//                             className="input"
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />

//                         <button className="btn-primary" disabled={loading}>
//                             {loading ? "Creating account..." : "Sign Up"}
//                         </button>
//                     </form>

//                     {/* NAVIGATION */}
//                     <p
//                         className="link-text"
//                         onClick={() => navigate("/")}
//                         style={{ marginTop: "16px", cursor: "pointer" }}
//                     >
//                         Already have an account? Login
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Signup;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");

//     // ✅ trim inputs to avoid hidden-space bugs
//     if (!name.trim() || !email.trim() || !password) {
//       setError("All fields are required");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: name.trim(),
//           email: email.trim(),
//           password,           // ✔ any string, any length
//           role: "student",    // ✔ forced student signup
//         }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         setError(data.message || "Signup failed");
//         return;
//       }

//       alert("Account created successfully! Please login.");
//       navigate("/");
//     } catch (err) {
//       setError("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       {/* LEFT BRAND */}
//       <div className="auth-brand">
//         <h1>ScholarStack</h1>
//         <p>Join a modern student management system.</p>

//         <div className="floating-emojis">
//           <span style={{ left: "5%", animationDuration: "22s" }}>📚</span>
//           <span style={{ left: "15%", animationDuration: "28s" }}>🎓</span>
//           <span style={{ left: "25%", animationDuration: "24s" }}>✏️</span>
//           <span style={{ left: "35%", animationDuration: "30s" }}>📖</span>
//           <span style={{ left: "45%", animationDuration: "26s" }}>🧠</span>
//           <span style={{ left: "55%", animationDuration: "32s" }}>📓</span>
//           <span style={{ left: "65%", animationDuration: "27s" }}>🎒</span>
//           <span style={{ left: "75%", animationDuration: "23s" }}>📐</span>
//           <span style={{ left: "85%", animationDuration: "29s" }}>📘</span>
//         </div>
//       </div>

//       {/* RIGHT SIGNUP */}
//       <div className="login-page">
//         <div className="login-card">
//           <h2 className="login-title">Create Account</h2>
//           <p className="login-subtitle">Start your learning journey</p>

//           {error && <p style={{ color: "red" }}>{error}</p>}

//           <form onSubmit={handleSignup}>
//             <input
//               className="input"
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <input
//               className="input"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <input
//               className="input"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <button
//               className="btn-primary"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? "Creating account..." : "Sign Up"}
//             </button>
//           </form>

//           <p
//             className="link-text"
//             onClick={() => navigate("/")}
//             style={{ cursor: "pointer", marginTop: "16px" }}
//           >
//             Already have an account? Login
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");      // ✅ city state added
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !age || !city.trim() || !email.trim() || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          age: Number(age),
          city: city.trim(),                  // ✅ city sent to backend
          email: email.trim(),
          password,
          role: "student",
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Signup failed");
        return;
      }

      alert("Account created! Please login.");
      navigate("/");
    } catch {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="login-page">
        <div className="login-card">
          <h2>Create Account</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={handleSignup}>
            <input
              className="input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="input"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <input
              className="input"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn-primary" disabled={loading}>
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>

          <p className="link-text" onClick={() => navigate("/")}>
            Already have an account? Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
