import React, { Component } from "react";

export default class Login extends Component {
  render() {
    const containerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "grey",
    };

    const formStyle = {
      width: "18%", //sizing the box
      backgroundColor: "#AAA",
      padding: "100px",
      borderRadius: "50px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };

    const inputStyle = {
      width: "100%",
      marginBottom: "20px",
      padding: "15px",
      borderRadius: "60px",
      fontSize: "20px",
    };

    return (
      <div style={containerStyle}>
        <form style={formStyle}>
          <h3 style={{ textAlign: "center" }}>Log In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              style={inputStyle}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              style={inputStyle}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label
                className="custom-control-label"
                htmlFor="customCheck1"
                style={{ fontSize: "20px" }}
              >
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ fontSize: "20px", padding: "12px 20px" }}
            >
              Submit
            </button>
          </div>

          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    );
  }
}
