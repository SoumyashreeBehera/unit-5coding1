import React, { useState } from "react";

export default function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password, name, location });
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="location"
          type="text"
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <input placeholder="age" type="number" />
        <br />
        <input
          placeholder="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
