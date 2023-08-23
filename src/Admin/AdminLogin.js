import React from "react";
import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      navigate("/admin");
      setMessage("Login successful");
    } else {
      setMessage("Login failed");
    }
  };
  return (
<div className="cony">
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phoneimage"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="Name"
                  id="username"
                  value={username}
                  placeholder="username"
                  className="form-control form-control-lg"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="form-label" for="username">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="Password"
                  id="password"
                  placeholder="password"
                  value={password}
                  className="form-control form-control-lg"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" for="password">
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={handleLogin}
              >
                Sign in
              </button>
              <p className="message">{message}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AdminLogin;
