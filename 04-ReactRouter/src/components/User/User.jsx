import React from "react";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
function User() {
  const { userid } = useParams;
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">User :{userid}</div>
=======

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="text-3xl text-center bg-orange-600 p-4 text-white font-medium">
        User :{userid.toLocaleUpperCase()}
      </div>
      <div className="text-center p-4 bg-gray-600 w-1/2 mx-auto"></div>
    </>
>>>>>>> e38ca3c9fe13e9e938bbc379d2d70e2aa801639e
  );
}

export default User;
