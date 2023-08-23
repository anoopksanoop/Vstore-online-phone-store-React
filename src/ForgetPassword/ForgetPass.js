import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forgetpass.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send a password reset email here.
    setShowMessage(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mt-4 mb-4">Forgot Password</h2>
          {showMessage ? (
            <div className="alert alert-success">
              Password reset email sent to {email}. Check your inbox.
            </div>
          ) : (
            <form style={{color: "white",
            background: "#0b0b0be8",
            padding: "10%",
            borderRadius:"20px",
            backgroundColor:"#212529"}} onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
