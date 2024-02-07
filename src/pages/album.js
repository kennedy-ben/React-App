import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function Album() {
    const [album, setAlbum] = useState({});
    const [photos, setPhotos] = useState([]);

    const { albumId } = useParams();
  
    useEffect(() => {
      

        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then((resp) => resp.json())
            .then((data )=> setAlbum(data));

        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((resp) => resp.json())
            .then((data) => setPhotos(data));
            }, [albumId]);

    return (
        <div>
            <Header />
            <div className="container">
                <h1>Album Information</h1>
                <p><strong>Title:</strong> {album.title}</p>
                <p><strong>User ID:</strong> {album.userId}</p>

                <h2>Photos</h2>
                <div className="photos">
                    {photos.map(photo => (
                        <div key={photo.id} className="photo">
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            <p>{photo.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
