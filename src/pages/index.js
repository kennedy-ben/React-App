import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./index.css";

function Index() {
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
    <div className="login-page">
      <header className="custom-header">
        <div className="logo-container">
          <h1 className="logo-text">Welcome</h1>
        </div>
        <div className="login-container">
          <GoogleOAuthProvider clientId="745853430499-24j63n4428u21ti4u8pvnuoritrfc7c4.apps.googleusercontent.com">
            <GoogleLogin
              className="google-login-button"
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
            />
          </GoogleOAuthProvider>
        </div>
      </header>
      <main className="content">
        <h1>Discover Something New.</h1>

        <p>
          This web app facilitates user authentication and seamless access to
          user, album, and photo content.
        </p>
        <p>
          <strong>Home Page:</strong> Displays users with album counts.
        </p>
        <p>
          <strong>User Page:</strong> Shows detailed user info and associated
          albums.
        </p>
        <p>
          <strong>Album Page:</strong> Provides album details and associated
          photos.
        </p>
        <p>
          <strong>Photo Page:</strong> Enables viewing and editing of photo
          details.
        </p>
      </main>
    </div>
  );
}

export default Index;
