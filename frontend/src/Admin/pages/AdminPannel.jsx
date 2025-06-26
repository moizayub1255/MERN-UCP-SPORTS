import React, { useState } from "react";

const AdminPanel = ({ onUpdate }) => {
  const [category, setCategory] = useState("Girls");
  const [teamId, setTeamId] = useState("");
  const [teamName, setTeamName] = useState("");
  const [house, setHouse] = useState("");
  const [points, setPoints] = useState(0);

  // Handle form submission to update team data
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedTeam = {
      id: teamId,
      category,
      name: teamName,
      house,
      points: parseInt(points),
    };
  
    let savedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const teamIndex = savedTeams.findIndex((team) => team.id === teamId);
  
    if (teamIndex >= 0) {
      savedTeams[teamIndex] = updatedTeam;
    } else {
      savedTeams.push(updatedTeam);
    }
  
    localStorage.setItem("teams", JSON.stringify(savedTeams)); // Store overall table
    // Similarly, store separate tables for boys and girls
    const boysTeams = savedTeams.filter(team => team.category === "Boys");
    const girlsTeams = savedTeams.filter(team => team.category === "Girls");
  
    localStorage.setItem("boysTeams", JSON.stringify(boysTeams));
    localStorage.setItem("girlsTeams", JSON.stringify(girlsTeams));
  
    onUpdate(savedTeams); // Update parent component
  };
  

  // Handle team deletion
  const handleDelete = () => {
    const savedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const updatedTeams = savedTeams.filter((team) => team.id !== teamId);

    localStorage.setItem("teams", JSON.stringify(updatedTeams));

    // Update the state in the parent component
    onUpdate(updatedTeams);

    // Reset form fields after deletion
    setTeamId("");
    setTeamName("");
    setHouse("");
    setPoints(0);
  };

  return (
    <div className="container py-4">
      <h3 className="text-center">Update Boys and Girls Table</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Category</label>
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Girls">Girls</option>
            <option value="Boys">Boys</option>
          </select>
        </div>
        {/* <div className="mb-3">
          <label>Team ID</label>
          <input
            className="form-control"
            type="text"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
          />
        </div> */}
        <div className="mb-3">
          <label>Game</label>
          <input
            className="form-control"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>House</label>
          <input
            className="form-control"
            type="text"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Points</label>
          <input
            className="form-control"
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Team</button>
        
      </form>
    </div>
  );
};

export default AdminPanel;
