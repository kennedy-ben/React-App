import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../Header";
import "./album.css";

export const Albums = () => {
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { albumId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`).then(
        (resp) => resp.json()
      ),
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      ).then((resp) => resp.json()),
      fetch(`https://jsonplaceholder.typicode.com/albums`).then((resp) =>
        resp.json()
      ),
    ])
      .then(([albumData, photosData, albumsData]) => {
        setAlbum(albumData);
        setPhotos(photosData);
        setAlbums(albumsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [albumId]);

  useEffect(() => {
    setPhotos(photos);
  }, [photos]);

  const handleAlbumClick = (albumId) => {
    setActiveAlbum(albumId);
  };

  const openPhotoInNewTab = (photoUrl) => {
    window.open(photoUrl, "_blank");
  };

  return (
    <div>
      <Header />
      <div className="album_container" data-testid="album-component">
        <div className="albums-container">
          <div className="albums">
            <h2 data-testid="all-albums">All Albums</h2>
            {albums.map((albumItem) => (
              <Link
                key={albumItem.id}
                to={`/albums/${albumItem.id}`}
                className={albumItem.id === parseInt(albumId) ? "active" : ""}
                onClick={() => handleAlbumClick(albumItem.id)}
              >
                <p>{albumItem.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="photos-container" data-testid="pic-component" >
          {isLoading ? (
            <div className="loader"></div>
          ) : (
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

                    <p>
                      <strong>Album Title:</strong> {album.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
