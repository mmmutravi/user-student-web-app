import { useState } from "react";
import API from "../services/apiAuth";

export default function Register() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const register = async () => {

    try {

      await API.post("/auth/register", {
        username: username,
        password: password,
        role: "ADMIN"
      });

      alert("User Registered");

    } catch(e) {

      console.log(e.response);
      alert("Register failed");
    }
  };

  return (
    <div>

      <h2>Register</h2>

      <input
        placeholder="username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={register}>Register</button>

    </div>
  );
}
