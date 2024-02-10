import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Header from "./Header";

export default function Index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((usersData) => {
        usersData.forEach((user) => {
          fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
            .then((resp) => resp.json())
            .then((albumsData) => {
              user.albumCount = albumsData.length;
              setUsers([...usersData]);
            });
        });
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Users Albums</h1>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Albums Count</th>
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
      </div>
    </div>
  );
}
