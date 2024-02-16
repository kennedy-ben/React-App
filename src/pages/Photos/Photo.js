import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import "./photo.css";

export const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedPhotos = localStorage.getItem("photos");

    if (storedPhotos) {
      setPhotos(JSON.parse(storedPhotos));
      setIsLoading(false);
    } else {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((resp) => resp.json())
        .then((data) => {
          setPhotos(data);
          setIsLoading(false);
          // Store photos data in localStorage
          localStorage.setItem("photos", JSON.stringify(data));
        })
        .catch((error) => {
          console.error("Error fetching photos:", error);
          setIsLoading(false);
        });
    }
  }, []);

  const handleTitleEdit = (photoId, newTitle) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`, {
      method: "PATCH", // or "PUT"
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedPhoto) => {
        setPhotos((prevPhotos) =>
          prevPhotos.map((photo) =>
            photo.id === updatedPhoto.id ? updatedPhoto : photo
          )
        );

        // Update stored data in localStorage
        localStorage.setItem(
          "photos",
          JSON.stringify(
            photos.map((photo) =>
              photo.id === updatedPhoto.id ? updatedPhoto : photo
            )
          )
        );
      })
      .catch((error) => {
        console.error("Error updating photo title:", error);
      });
  };

  return (
    <div>
      <Header />
      <div className="container" data-testid="photo-component">
        <h1>Photos Of All Albums</h1>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <ul>
            {photos.map((photo) => (
              <li key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <div
                  contentEditable
                  onBlur={(e) => handleTitleEdit(photo.id, e.target.innerText)}
                  data-placeholder="Enter a title"
                  dangerouslySetInnerHTML={{ __html: photo.title }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
