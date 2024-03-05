import React, { useEffect } from "react";
import "./Style.css";

const Login = () => {
  useEffect(() => {
    const labels = document.querySelectorAll('.form-control label');
    labels.forEach((label) => {
      label.innerHTML = label.innerText
          .split('')
          .map((letter, i) => 
              `<span style="transition-delay: ${i * 50}ms">${letter}</span>`
          )
          .join('');
    });
  }, []);

  return (
    <div className="style">
    <div className="container">
      <h2>Please Login</h2>
      <form>
        <div className="form-control">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="form-control">
          <input type="password" required />
          <label>Password</label>
        </div>
        <button className="btn" type="submit">Login</button>
      </form>
      <p className="text">Don't have an account?<a href="#">Register</a></p>
    </div>
    </div>
  );
};

export default Login;
