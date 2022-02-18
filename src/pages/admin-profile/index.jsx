import React from "react";

import DashLogs from "../../components/dash-log/dash-log";
import UserRegister from "../../components/user-register";
import "./styles.css";

const AdminProfile = () => {
  return (
    <>
      <div className="desk">
        <div className='flex-ctr'>
          <UserRegister />
        </div>
        <div className='flex-ctr'>
          <DashLogs />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
