import React, { useState } from "react";
import { Button } from "./Button";

export const Users = () => {
  //replace with backend call
  const [users, setUsers] = useState([
    { firstName: "Aradhana", lastName: "Bhattacharjee", _id: 1 },
    { firstName: "Niyati", lastName: "Nath Choudhury", _id: 2 },
  ]);
  return (
    <div>
      <div className="font-bold mt-6 text-lg ml-2">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-[98%] px-2 py-1 mx-2 border rounded-lg border-slate-200 focus:outline-none"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
};
export const User = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div className="flex ml-2">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full pr-5">
        <Button label={"Send Money"}></Button>
      </div>
    </div>
  );
};
