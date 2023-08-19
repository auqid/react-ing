import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <Link to="">User1</Link>
      <Link to="">User 2 </Link>
      <Link to="">User 3 </Link>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>reset filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing all users</h2>
      ) : (
        <h2>Showing active users</h2>
      )}
    </div>
  );
};

export default Users;
