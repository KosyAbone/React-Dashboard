import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);

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

  const fetchedList = loading ? <p>Loading...</p>
    : 
    <ul>
      {users.map((user) => (
        <li key={user.uid}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
        </li>
      ))}
    </ul>
  
  return (
    <div>
      <h2>List of Registered Users</h2>
      {fetchedList}
    </div>
  );
};

export default UsersList;
