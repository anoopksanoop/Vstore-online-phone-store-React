import React from "react";
import { useContext } from "react";
import { footContext } from "../Context";
import './AdminUser.css'


const AdminUser = () => {
 
  const {password}= useContext(footContext)
  console.log(password);
 
  
  return (
    <div className="user">
      <h2>Users</h2>
      {/* mapinte akath parameter pass chyunn */}
      {password.map((user) => {
        console.log("hello", user.Name);
        return (
          <div key={user.id}>
            <h3>Name: {user.Name}</h3>
            <p>Email: {user.Email}</p>
            <p>Password: {user.Password}</p>
          </div>
        );
      })}
    </div>
  );
  
};

export default AdminUser;
