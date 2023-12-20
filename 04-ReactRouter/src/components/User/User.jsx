import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="text-3xl text-center bg-orange-600 p-4 text-white font-medium">
        User :{userid.toLocaleUpperCase()}
      </div>
      <div className="text-center p-4 bg-gray-600 w-1/2 mx-auto"></div>
    </>
  );
}

export default User;
