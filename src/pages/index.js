import React from "react";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./index.css";

function Index() {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    // const decoded = jwtDecode(credentialResponse.credential);
    localStorage.setItem("authToken", credentialResponse.credential);

    navigate("/state");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="login-page">
      <header className="custom-header">
        <div className="icon-container">TuneSync Display</div>
        <div>
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

        <div className="home-page_cards">
          <div className="row">
            <div className="home-page_card">
              Welcome to our vibrant homepage! Here, you'll find a delightful
              showcase of album counts for our fantastic users. Dive into the
              world of music discovery and exploration with us!{" "}
            </div>
            <div className="home-page_card">
              Discover a curated showcase of your profile, revealing your unique
              identity and cherished albums{" "}
            </div>
          </div>
          <div className="row">
            <div className="home-page_card">
              Here, you'll find a curated collection of captivating albums, each
              offering a unique journey through moments, melodies, and memories.{" "}
            </div>
            <div className="home-page_card">
              Step into a world of visual delight as you effortlessly browse
              through your stunning photo collection for all albums.{" "}
            </div>
          </div>
          <div className="text">
            <h1>Countinue With Seamless Authentication.</h1>
          </div>
          <div className="login-card">
            <GoogleOAuthProvider clientId="745853430499-24j63n4428u21ti4u8pvnuoritrfc7c4.apps.googleusercontent.com">
              <GoogleLogin
                className="google-login-button"
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
