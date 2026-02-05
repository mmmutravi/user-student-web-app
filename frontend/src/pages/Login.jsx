import { useState } from "react";
import API from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {

    try {

      const res = await API.post("/auth/login", {
        username,
        password
      });

      localStorage.setItem("token", res.data);

      navigate("/students");

    } catch(e) {
      alert("Login failed");
    }
  };

  return (
    <div>

      <h2>Login</h2>

      <input placeholder="username"
        onChange={(e)=>setUsername(e.target.value)} />

      <input type="password"
        placeholder="password"
        onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={login}>Login</button>

    </div>
  );
}
