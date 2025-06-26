import React from "react";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* <Sidebar /> */}
      <div className="flex-grow-1">
        {/* <Navbar /> */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};


export default AdminLayout;
