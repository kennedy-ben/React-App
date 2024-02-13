import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./photo.css";

export default function Album() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((data) => {
        setPhotos(data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setIsLoading(false); // Set loading to false on error
      });
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
      })
      .catch((error) => {
        console.error("Error updating photo title:", error);
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Photos Of All Albums</h1>
        {isLoading ? ( // Show loader if data is still loading
          <div className="loader"></div> // Add loader CSS class
        ) : (
          <ul>
            {photos.map((photo) => (
              <li key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <div
                  contentEditable
                  onBlur={(e) =>
                    handleTitleEdit(photo.id, e.target.innerText)
                  }
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
}
