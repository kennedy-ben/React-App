import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../Header";
import "./User.css";

export const User = () => {
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
        (response) => response.json()
      ),
      fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      ).then((response) => response.json()),
    ])
      .then(([userData, albumsData]) => {
        setUser(userData);
        setAlbums(albumsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  return (
    <div>
      <Header />
      <div className="user-container" data-testid="user-component">
        <h2>User Information</h2>

        <div className="user-info">
          <p data-testid="user-name">
            <strong>Name:</strong> {user.name}
          </p>
          <p data-testid="user-email">
            <strong>Email:</strong> {user.email}
          </p>
          <p data-testid="user-phone">
            <strong>Phone:</strong> {user.phone}
          </p>

          <p data-testid="user-website">
            <strong>Website:</strong> {user.website}
          </p>
        </div>
        <h2  data-testid="albulms-header">Albums</h2>
        {isLoading ? (
          <div data-testid="loading-indicator" className="loader"></div>
        ) : (
          <ul className="album-list" data-testid="albumsData">
            {albums.map((album) => (
              <li key={album.id}>
                <Link data-testid="albumLink" to={`/albums/${album.id}`}>{album.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
