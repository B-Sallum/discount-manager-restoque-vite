import React from "react";
import AddUser from "./add-user";
import userDashboard from "./user-table/user-dashboard";
import { FaUserCircle } from "react-icons/fa";
import "./styles.css";

const AdminProfile = () => {
  return (
    <>
      <div className="desk">
        <div className="user-name">
          <FaUserCircle className="user-circle" /> Nome do usuario
        </div>
        <AddUser />
      </div>
      <userDashboard />
    </>
  );
};

export default AdminProfile;
