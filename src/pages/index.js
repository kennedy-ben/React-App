import Header from "./Header";
import React from "react";

export default function index() {
  return (
    <div>
      <Header />
      <div>
        <p>All these are the users</p>
        <p>The page should tell you how many albums a user has</p>
        <p>The page must run a GET request for the users</p>
        <p>The page must run a GET request for the albums</p>
      </div>
    </div>
  );
}
