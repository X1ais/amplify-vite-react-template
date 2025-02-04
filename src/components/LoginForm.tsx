import React, { useState } from "react";
import "../styles/LoginForm.css";
import bcrypt from "bcryptjs";
import axios from 'axios'

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const hashedPassword = bcrypt.hashSync(password, 13);

    //Call POST api here
    axios.post('http://localhost:8081/login', { email, password })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  return (
    <>
      <form className="form-container">
        <label>Log in</label>
        <input
          className="text-input"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button login-button"
          type="submit"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>

        <hr />

        <a href="/register">Register</a>
      </form>
    </>
  );
}

export default LoginForm;
