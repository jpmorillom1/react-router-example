import React from "react";
// 1. Importamos el hook
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Validando usuario...");

    navigate("/students");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
