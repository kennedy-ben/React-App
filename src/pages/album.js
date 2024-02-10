import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import "./album.css";

export default function Album() {
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [activeAlbum, setActiveAlbum] = useState(null);

  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((resp) => resp.json())
      .then((data) => setAlbum(data));

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((resp) => resp.json())
      .then((data) => setPhotos(data));

    // Fetch all albums
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((resp) => resp.json())
      .then((data) => setAlbums(data));
  }, [albumId]);

  const handleAlbumClick = (albumId) => {
    setActiveAlbum(albumId);
  };

  const openPhotoInNewTab = (photoUrl) => {
    window.open(photoUrl, "_blank");
  };

  return (
    <div>
      <Header />
      <div className="album_container">
        <div className="albums-container">
          <div className="albums">
            <h2>All Albums</h2>
            {albums.map((albumItem) => (
              <Link
                key={albumItem.id}
                to={`/album/${albumItem.id}`}
                className={albumItem.id === parseInt(albumId) ? "active" : ""}
                onClick={() => handleAlbumClick(albumItem.id)}
              >
                <p>{albumItem.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="photos-container">
          <div
            className={`photos ${
              activeAlbum === parseInt(albumId) ? "active" : ""
            }`}
          >
            <h2>Photos Of Selected Album</h2>
            <div className="photo-grid">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="photo"
                  onClick={() => openPhotoInNewTab(photo.url)}
                >
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                  <p>{photo.title}</p>
                  {/* <p>
                    <strong>User ID:</strong> {photo.userId}
                  </p> */}
                  <p>
                    <strong>Album Title:</strong> {album.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
