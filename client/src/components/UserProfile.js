import React from "react";

const UserProfile = ({ user }) => {
    return (
    <div className="userProfile">
        <h1>`Welcome to North Of The Charles, ${user.firstName} ${user.lastName}!`</h1>
        <p>Your Username: {user.username}</p>
        <p>Your Email: {user.email}</p>
    </div>
    );
};

export default UserProfile