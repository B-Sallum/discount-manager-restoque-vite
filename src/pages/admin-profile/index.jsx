import React from "react";

import { FaUserCircle } from "react-icons/fa";
import "./styles.css";

const AdminProfile = () => {
  return (
    <>
      <div className="desk">
        <div className="user-name">
          <FaUserCircle className="user-circle" /> Nome do usuario
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
