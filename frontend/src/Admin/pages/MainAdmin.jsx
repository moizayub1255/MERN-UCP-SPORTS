import React from "react";
import AdminHeadFoot from "./AdminHeadFoot";

const MainAdmin = () => {
  const boxes = [
    { id: 1, color: "#ff4d4d", title: "Teams", subtitle: "4" },
    { id: 2, color: "#4da6ff", title: "Students", subtitle: "1000+" },
    { id: 3, color: "pink", title: "Games", subtitle: "50+" },
    // { id: 4, color: "#ffcc4d", title: "Box 4", subtitle: "This is box 4" }
  ];

  return (
    <AdminHeadFoot>
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="pl-4 m-4 p-6 rounded-lg shadow-lg text-white"
            style={{
              backgroundColor: box.color,
              width: "200px",
              height: "150px",
            }}
          >
            <h1 className="text-xl font-semibold text-center">{box.title}</h1>
            <h4 className=" text-center">{box.subtitle}</h4>
          </div>
        ))}
      </div>
    </AdminHeadFoot>
  );
};

export default MainAdmin;
