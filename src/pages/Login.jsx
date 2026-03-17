

import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {
      const res = await API.post("/auth/login", {
        email: email,
        password: password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("role", res.data.user.role); 

    //   navigate("/dashboard");
        const user = res.data.user;
        if(user.role === "admin"){
            navigate("/dashboard");
        }
        else if(user.role === "patient"){
            navigate("/patient/PatientDashboard");
        }
        else if (user.role === "doctor"){
            navigate("/doctor");
        }

        else if (user.role === "receptionist") {
            navigate("/receptionist");
        }   

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-page">
    <div className="login-container">

      <h2>Clinic Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
    </div>
  );
}

export default Login;