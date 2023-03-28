import React from 'react';
import './UserCard.css';

const UserCard = ({user}) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        {user.id}. {user.name}
      </div>
      <div className="user-card-body">
        <div className="user-username">Username: {user.username}</div>
        <div className="user-email">Email: {user.email}</div>
        <div className="user-phone">Phone: {user.phone}</div>
      </div>
    </div>
  );
};

export default UserCard;

  