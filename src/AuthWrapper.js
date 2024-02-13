import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const AuthWrapper = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return <div>{children}</div>;
};

export default AuthWrapper;
