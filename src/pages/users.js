import React, { useEffect, useState } from 'react';
import Header from './Header';

export default function UserPage({ match }) {
  const userId = match.params.id;
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(resp => resp.json())
      .then(userData => setUser(userData));

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(resp => resp.json())
      .then(albumsData => setAlbums(albumsData));
  }, [userId]);

  return (
    <div>
      <Header />
      <div className="container">
        <h1>User Information</h1>
        {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
           
          </div>
        )}
        <h2>Albums</h2>
        <ul>
          {albums.map(album => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
