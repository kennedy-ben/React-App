import React from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./index.css";

function App() {
  return (
    <div className="landing-page">
      <header>
        <h1>Discover Something New. </h1>
        {/* <p>Unlock the full potential with just one click!</p> */}
        <p>
          This web application provides a user-friendly interface for authentication and accessing various content pages related to users, albums, and photos.
        </p>
        <p>
          <strong>Home Page:</strong> Offers an overview of all users, including the count of albums each user has.
        </p>
        <p>
          <strong>User Page:</strong> Provides detailed information about a selected user, including the list of albums associated with that user.
        </p>
        <p>
          <strong>Album Page:</strong> Displays details about a selected album, along with a list of photos belonging to that album.
        </p>
        <p>
          <strong>Photo Page:</strong> Allows users to view and edit details of a selected photo, facilitating interaction with the photo content.
        </p>
      </header>

      <main>
        <div className="login-section">
          <h2 className="section-title">Login with Google</h2>

          <p>Experience seamless authentication with your Google account.</p>
          <GoogleOAuthProvider clientId="1025046045192-s5juf2p41n3qc8n9d6jrrd056031e0lt.apps.googleusercontent.com">
            <GoogleLogin
            className="google-login-button"
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
        </div>

        {/* <div className="google-icon">
          <img src="https://example.com/path/to/google-icon.svg" alt="Google Icon" />
        </div> */}
      </main>
    </div>
  );
}

export default App;
