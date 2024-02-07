import React, { useEffect, useState } from "react";
import Header from "./Header";

export default function Album() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Photos</h1>
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              {photo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
