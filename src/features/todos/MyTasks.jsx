import React from "react";
import Header from "../../components/widgets/Header";

const MyTasks = () => {
  return (
    <>
      <Header title="My Tasks" />

      <div className="p-8">
        <ul className="menu menu-lg">
          <li>Create react app</li>
          <li>Create express app</li>
          <li>Connect API</li>
        </ul>
      </div>
    </>
  );
};

export default MyTasks;
