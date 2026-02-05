import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>

      <Link to="/">Login</Link> |
      <Link to="/register">Register</Link> |
      <Link to="/students">Students</Link> |

      <button onClick={logout}>Logout</button>

    </div>
  );
}
