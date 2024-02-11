import React from "react";
import "./index.css";


function App() {
  return (
    <div className="app">
      <header>
        <h1>SnapSync Central</h1>
        <p>Welcome to our amazing website!</p>
      </header>

      <section className="login-section">
        <div className="login-content">
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
                <a href="login" className="forgot-password">
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
          <div className="login-text">
            <p>
              Welcome to our platform! Login to access exclusive features and content.
            </p>
            <p>
            This web application provides a user-friendly interface for authentication and accessing various content pages related to users, albums, and photos.
             Users can log in using their preferred authentication provider, and once authenticated, they can navigate through the following pages
            </p>
            <p>
            <ui>Home Page: Offers an overview of all users, including the count of albums each user has.</ui>
            <br/>
            <ui> User Page: Provides detailed information about a selected user, including the list of albums associated with that user.</ui>
            <br/>
            <ui>Album Page: Displays details about a selected album, along with a list of photos belonging to that album.</ui>
            <br/>
            <ui>Photo Page: Allows users to view and edit details of a selected photo, facilitating interaction with the photo content.</ui>
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default App;