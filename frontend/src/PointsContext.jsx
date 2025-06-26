import React, { createContext, useState, useContext } from "react";

const PointsContext = createContext();

export const usePoints = () => useContext(PointsContext);

export const PointsProvider = ({ children }) => {
  const [pointsData, setPointsData] = useState([]); // Initialize with an empty array

  const updatePoints = (id, newPoints) => {
    setPointsData((prevPoints) =>
      prevPoints.map((team) =>
        team._id === id ? { ...team, points: newPoints } : team
      )
    );
  };

  return (
    <PointsContext.Provider value={{ pointsData, setPointsData, updatePoints }}>
      {children}
    </PointsContext.Provider>
  );
};