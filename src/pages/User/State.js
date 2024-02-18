import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import "./state.css";

export const State = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((usersData) => {
        const fetchAlbumCount = async (user) => {
          const albumsResp = await fetch(
            `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`
          );
          const albumsData = await albumsResp.json();
          user.albumCount = albumsData.length;
          return user;
        };

        const fetchAllAlbumCounts = async () => {
          const updatedUsers = await Promise.all(
            usersData.map((user) => fetchAlbumCount(user))
          );
          setUsers(updatedUsers);
        };

        fetchAllAlbumCounts();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Users Albums</h1>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>
                  <h6>User</h6>
                </th>
                <th>
                  <h6>Albums Count</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Link to={`/user/${user.id}`}>{user.name}</Link> {}
                  </td>
                  <td>{user.albumCount || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
