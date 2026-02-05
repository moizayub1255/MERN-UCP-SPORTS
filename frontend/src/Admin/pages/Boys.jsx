import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeadFoot from "./AdminHeadFoot";

const Boys = () => {
  const [games, setGames] = useState([]); // Initialize as empty array
  const [newGame, setNewGame] = useState("");
  const [gamePoints, setGamePoints] = useState({}); // Points per game

  // Fetch existing games for boys
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/games/games`,
          {
            params: { category: "boys" },
          },
        );
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setGames(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setGames([]);
        }

        // Fetch points table
        const pointsResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/points-table`,
          {
            params: { category: "boys" },
          },
        );
        const pts = {};
        pointsResponse.data.forEach((item) => {
          pts[item.game._id] = item.points || {};
        });
        setGamePoints(pts);
      } catch (error) {
        console.error("Error fetching games or points:", error);
        setGames([]);
        setGamePoints({});
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
        },
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
          category: "boys", // Boys.jsx me "boys" hoga
          points: gamePoints[gameId] || {},
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
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
                    value={gamePoints[game._id]?.Jaguars || 0}
                    onChange={(e) =>
                      setGamePoints({
                        ...gamePoints,
                        [game._id]: {
                          ...gamePoints[game._id],
                          Jaguars: parseInt(e.target.value) || 0,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <label>Warriors: </label>
                  <input
                    type="number"
                    value={gamePoints[game._id]?.Warriors || 0}
                    onChange={(e) =>
                      setGamePoints({
                        ...gamePoints,
                        [game._id]: {
                          ...gamePoints[game._id],
                          Warriors: parseInt(e.target.value) || 0,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <label>Hawks: </label>
                  <input
                    type="number"
                    value={gamePoints[game._id]?.Hawks || 0}
                    onChange={(e) =>
                      setGamePoints({
                        ...gamePoints,
                        [game._id]: {
                          ...gamePoints[game._id],
                          Hawks: parseInt(e.target.value) || 0,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <label>Gladiators: </label>
                  <input
                    type="number"
                    value={gamePoints[game._id]?.Gladiators || 0}
                    onChange={(e) =>
                      setGamePoints({
                        ...gamePoints,
                        [game._id]: {
                          ...gamePoints[game._id],
                          Gladiators: parseInt(e.target.value) || 0,
                        },
                      })
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
