import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeadFoot from "./AdminHeadFoot";

const Boys = () => {
  const [games, setGames] = useState([]); // Initialize as empty array
  const [newGame, setNewGame] = useState("");
  const [points, setPoints] = useState({
    Jaguars: 0,
    Warriors: 0,
    Hawks: 0,
    Gladiators: 0,
    Falcons: 0,
  });

  // Fetch existing games for girls
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/games/games`,
          {
            params: { category: "boys" },
          }
        );
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setGames(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setGames([]);
        }
      } catch (error) {
        console.error("Error fetching games:", error);
        setGames([]);
      }
    };
    fetchGames();
  }, []);

  // Add a new game
  const handleAddGame = async () => {
    if (!newGame) return alert("Please enter a game name");

    // 🆕 Convert name to lowercase
    const formattedGameName = newGame.toLowerCase();

    try {
      const token = localStorage.getItem("token"); // Token le lo

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/games/add-game`,
        {
          name: formattedGameName, // Updated name in lowercase
          category: "boys",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Token bhejo
          },
        }
      );

      setGames([...games, response.data.game]);
      setNewGame("");
    } catch (error) {
      console.error("Error adding game:", error);
    }
  };

  // Update points for a game
  const handleUpdatePoints = async (gameId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/points-table/update-points`,
        {
          gameId,
          category: "boys", // Girls.jsx me "girls" hoga
          points,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Points updated successfully!");
      window.location.reload(); // Refresh page to update Leaderboard
    } catch (error) {
      console.error("Error updating points:", error);
    }
  };

  return (
    <AdminHeadFoot>
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Boys Games Management</h1>
      <p>Add new games and update points for boys here.</p>
      {/* Add New Game Section */}
      <div>
        <h2>Add New Game</h2>
        <input
          type="text"
          value={newGame}
          onChange={(e) => setNewGame(e.target.value)}
          placeholder="Enter game name"
        />
        <button onClick={handleAddGame}>Add Game</button>
      </div>

      {/* Update Points Section */}
      <div>
        <h2>Update Points</h2>
        {games.length > 0 ? (
          games.map((game) => (
            <div key={game._id} style={{ marginBottom: "20px" }}>
              <h3>{game.name}</h3>
              <div>
                <label>Jaguars: </label>
                <input
                  type="number"
                  value={points.Jaguars}
                  onChange={(e) =>
                    setPoints({ ...points, Jaguars: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Warriors: </label>
                <input
                  type="number"
                  value={points.Warriors}
                  onChange={(e) =>
                    setPoints({ ...points, Warriors: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Hawks: </label>
                <input
                  type="number"
                  value={points.Hawks}
                  onChange={(e) =>
                    setPoints({ ...points, Hawks: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Gladiators: </label>
                <input
                  type="number"
                  value={points.Gladiators}
                  onChange={(e) =>
                    setPoints({ ...points, Gladiators: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Falcons: </label>
                <input
                  type="number"
                  value={points.Falcons}
                  onChange={(e) =>
                    setPoints({ ...points, Falcons: e.target.value })
                  }
                />
              </div>
              <button onClick={() => handleUpdatePoints(game._id)}>
                Save Points
              </button>
            </div>
          ))
        ) : (
          <p>No games found. Add a new game to get started.</p>
        )}
      </div>
    </div>
    </AdminHeadFoot>
  );
};

export default Boys;
