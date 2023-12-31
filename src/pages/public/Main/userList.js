import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './userList.css';

const UsersList = () => {
  // State to store/manage the list of users and loading status
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Get the 'users' collection from Firestore
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);

        // Extract user data from the Firestore documents
        const usersData = usersSnapshot.docs.map((userDoc) => ({
          uid: userDoc.id,
          ...userDoc.data(),
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Conditional rendering based on loading status
  const fetchedList = loading ? <p>Loading...</p> : (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.uid}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="user-container">
      <h2>List of Registered Users</h2>
      <div className="user-table-container">
        {fetchedList}
      </div>
    </div>
  );
};

export default UsersList;