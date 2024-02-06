import React from "react";
// import Header from "./Header";
 
//  import Episodes from "./episode";

function Index() {
  const headingStyle = {
    textAlign: "center",
    color: "black",
    padding: "10px",
  };

  return (
    <div>
     
      <h1 style={headingStyle}>
        Hello Welcome To My New Project
      </h1>
      <p>All these are the users</p>
      <p>The page should tell you how many albums a user has</p>
      <p>The page must run a GET request for the users</p>
      <p>The page must run a GET request for the albums</p>
    
    
    </div>
  );
}

export default Index;