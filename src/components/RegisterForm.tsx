import React, { useState } from "react";
import bcrypt from 'bcryptjs'

export default function RegisterForm() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const data = {
    fName: "",
    lName: "",
    email: "",
    hashedPassword: "",
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      console.log("Passwords must match.");
      alert("Passwords must match!");
      return;
    }

    // Populate the state
    data.fName = fName;
    data.lName = lName;
    data.email = email;
    data.hashedPassword = bcrypt.hashSync(password, 13);

    //Call POST api here


  };

  return (
    <form className="form-container" onSubmit={(e) => handleRegistration(e)}>
      <label>Register for an account</label>
      <div>
        <input
          className="text-input"
          type="text"
          placeholder="First Name"
          required
          onChange={(e) => setFName(e.target.value)}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Last Name"
          required
          onChange={(e) => setLName(e.target.value)}
        />
      </div>
      <input
        className="text-input"
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="text-input"
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="text-input"
        type="password"
        placeholder="Confirm Password"
        required
        onChange={(e) => setConfPassword(e.target.value)}
      />
      <button className="button login-button" type="submit">
        Register
      </button>
    </form>
  );
}
