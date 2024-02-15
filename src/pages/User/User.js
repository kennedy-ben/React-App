import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../Header";
import "./User.css";

export const User = () => {
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="user-container">
        <h2>User Information</h2>
        <div className="user-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
        <h2>Albums</h2>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <ul className="album-list">
            {albums.map((album) => (
              <li key={album.id}>
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
