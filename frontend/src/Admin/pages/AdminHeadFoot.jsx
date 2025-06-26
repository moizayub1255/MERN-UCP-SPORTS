import React from "react";
import AdminHead from "./AdminHead";
import AdminFoot from "./AdminFoot";

const AdminHeadFoot = ({ children }) => {
  return (
    <div>
      <AdminHead></AdminHead>
      <main style={{ minHeight: "76vh", paddingTop: "90px" }}>{children}</main>
      <AdminFoot></AdminFoot>
    </div>
  );
};

export default AdminHeadFoot;
