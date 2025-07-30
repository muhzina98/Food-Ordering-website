import React from 'react';
import { useSelector } from 'react-redux';


const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">My Profile</h2>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default ProfilePage;
