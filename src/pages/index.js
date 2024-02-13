import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./index.css";

function App() {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    localStorage.setItem("authToken", credentialResponse.credential);

    navigate("/state");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <h1>Discover Something New. </h1>
          {/* <p>Unlock the full potential with just one click!</p> */}
          <p>
            This web application provides a user-friendly interface for
            authentication and accessing various content pages related to users,
            albums, and photos.
          </p>
          <p>
            <strong>Home Page:</strong> Offers an overview of all users,
            including the count of albums each user has.
          </p>
          <p>
            <strong>User Page:</strong> Provides detailed information about a
            selected user, including the list of albums associated with that
            user.
          </p>
          <p>
            <strong>Album Page:</strong> Displays details about a selected
            album, along with a list of photos belonging to that album.
          </p>
          <p>
            <strong>Photo Page:</strong> Allows users to view and edit details
            of a selected photo, facilitating interaction with the photo
            content.
          </p>
        </div>
        <div className="header-right">
          {/* Your name or any other content */}
          Your Name
        </div>
      </header>

      <main>
        <div className="login-section">
          <h2 className="section-title">Login with Google</h2>

          <p>Experience seamless authentication with your Google account.</p>
          <GoogleOAuthProvider clientId="745853430499-24j63n4428u21ti4u8pvnuoritrfc7c4.apps.googleusercontent.com">
            <GoogleLogin
              className="google-login-button"
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
            />
          </GoogleOAuthProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
