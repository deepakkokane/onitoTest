import React, { useEffect, useState } from "react";
import "./Styles.css";
const ListUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData([...data.users]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Govt ID</th>
            <th>Guardian Details</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr key={user?._id}>
                <td>{user?.name}</td>
                <td>{user?.age}</td>
                <td>{user?.sex}</td>
                <td>{user?.mobile}</td>
                <td>{user?.address}</td>
                <td>{user?.govId}</td>
                <td>{user?.guardianName}</td>
                <td>{user?.nationality}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;
