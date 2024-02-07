import React, { useEffect, useState } from 'react';
import Header from './Header';

export default function Album() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(resp => resp.json())
            .then(data => {
                setAlbums(data);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <h1>Albums</h1>
                <ul>
                    {albums.map(album => (
                        <li key={album.id}>
                            <strong>{album.title}</strong> - User ID: {album.userId}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

