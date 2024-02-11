import React from "react";
import "./index.css";
// import loginImage from "../assets/login-image.jpg";
import loginImage from "../assets/login-image.jpg";

export default function Index() {
  return (
    <div>
      <section className="login-section">
        <div className="login-content">
          <div className="login-image">
            <img src={loginImage} alt="Login" />
           
          </div>
          <div className="login-form">
            <h2>Login to Your Account</h2>
            <form>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="submit-button">
                Login
              </button>
              <div className="or-divider">or</div>
              <button type="button" className="google-signup">
                Sign up with Google
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
