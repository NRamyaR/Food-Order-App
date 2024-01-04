import { useEffect, useState } from "react";

function User({ name, location, contact }) {
  const [count] = useState(0);
  const [count2] = useState(1);
  useEffect(() => {
    //API Call
  }, []);
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>Name:{name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
}

export default User;
