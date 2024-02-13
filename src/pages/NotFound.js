import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "black" }}>
        Oops! Page You are Looking For Not Found
      </h1>
      <button
        onClick={handleGoBack}
        style={{
          backgroundColor: "#007BFF",
          border: "none",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "4px",
          marginTop: "10px",
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
