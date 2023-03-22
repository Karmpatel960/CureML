import React from "react";
import './Login.css';

function LoginPage() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;