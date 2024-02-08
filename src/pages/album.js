import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';

export default function Album() {
    const [album, setAlbum] = useState({});
    const [photos, setPhotos] = useState([]);
    const [albums, setAlbums] = useState([]);

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

    return (
        <div>
            <Header />
            <div className="container">
                <h1>Album Information</h1>
                <p><strong>Title:</strong> {album.title}</p>
                <p><strong>User ID:</strong> {album.userId}</p>

                <h2>All Albums</h2>
                <div className="albums">
                    {albums.map((albumItem) => (
                        <Link key={albumItem.id} to={`/album/${albumItem.id}`} className={albumItem.id === parseInt(albumId) ? 'active' : ''}>
                            <p>{albumItem.title}</p>
                        </Link>
                    ))}
                </div>

                <h2>Photos</h2>
                <div className="photos">
                    {photos.map((photo) => (
                        <div key={photo.id} className="photo">
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                             <p>{photo.title}</p> 
                            <p><strong>User ID:</strong> {photo.userId}</p>
                            <p><strong>Album Title:</strong> {album.title}</p> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
