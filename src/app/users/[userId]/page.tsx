import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();
  return (
    <div className="container mx-auto">
      <div className="card card-border bg-base-100 my-5">
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <p>{user.email}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
