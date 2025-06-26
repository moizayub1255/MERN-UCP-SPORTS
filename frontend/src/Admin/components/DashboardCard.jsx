import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="card p-3 m-2" style={{ width: "200px", textAlign: "center" }}>
      <h5>{title}</h5>
      <h3>{value}</h3>
    </div>
  );
};

export default DashboardCard;
