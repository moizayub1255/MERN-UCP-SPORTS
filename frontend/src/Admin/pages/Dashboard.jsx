import React, { useEffect, useState } from "react";
import { usePoints } from "../../PointsContext";
import AdminHeadFoot from "./AdminHeadFoot";

const Dashboard = () => {
  const { pointsData, setPointsData, updatePoints } = usePoints();
  const [editedPoints, setEditedPoints] = useState({}); // 🆕 Store edited values

  useEffect(() => {
    const fetchPointsData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/points");
        const data = await response.json();
        setPointsData(data);
      } catch (error) {
        console.error("Error fetching points data:", error);
      }
    };

    fetchPointsData();
  }, []);

  const handleChange = (id, value) => {
    setEditedPoints((prev) => ({ ...prev, [id]: value })); // 🆕 Track local changes
  };

  const handleUpdatePoints = async (id) => {
    if (editedPoints[id] === undefined) return; // 🆕 Ignore if no change

    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/points/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ points: editedPoints[id] }),
      });

      updatePoints(id, editedPoints[id]); // 🆕 Update context
      setEditedPoints((prev) => {
        const updated = { ...prev };
        delete updated[id]; // 🆕 Remove from local state after save
        return updated;
      });
    } catch (error) {
      console.error("Error updating points:", error);
    }
  };

  return (
    <AdminHeadFoot>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
          <h1 className="text-2xl font-semibold text-center mb-4 text-gray-800">
            Update OverAll Points
          </h1>
          {pointsData.length === 0 ? (
            <p className="text-center text-gray-600">No teams found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="p-3 text-left">Team</th>
                    <th className="p-3 text-left">Points</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pointsData.map((team) => (
                    <tr key={team._id} className="border-t border-gray-300">
                      <td className="p-3">{team.teamName}</td>
                      <td className="p-3">
                        <input
                          type="number"
                          value={editedPoints[team._id] ?? team.points}
                          onChange={(e) =>
                            handleChange(team._id, Number(e.target.value))
                          }
                          className="w-20 p-1 border rounded-md text-center"
                        />
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleUpdatePoints(team._id)}
                          className="bg-gray-500 hover:bg-blue text-black px-4 py-2 rounded-md transition"
                        >
                          Save
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminHeadFoot>
  );
};

export default Dashboard;
