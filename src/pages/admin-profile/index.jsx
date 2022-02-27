import React from "react";
import { useNavigate } from "react-router-dom";

import UserRegister from "../../components/user-register";
import "./styles.css";

const AdminProfile = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="desk">
        <div className='flex-ctr'>
          <UserRegister />
        </div>
        <div className='flex-ctr'>
          <button className="flex-ctr" onClick={() => navigate("/logs")}>
            Mostrar Logs
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
