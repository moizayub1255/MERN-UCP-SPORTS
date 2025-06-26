import React, { useState, useEffect } from "react";
import Headandfoot from "../Layout/Headandfoot";
import axios from "axios";

const Leaderboard = () => {
  const [boysLeaderboard, setBoysLeaderboard] = useState([]);
  const [girlsLeaderboard, setGirlsLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const boysResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/points-table?category=boys`
        );
        const girlsResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/points-table?category=girls`
        );

        console.log("Boys Leaderboard Data:", boysResponse.data); // Debugging
        console.log("Girls Leaderboard Data:", girlsResponse.data); // Debugging

        setBoysLeaderboard(boysResponse.data);
        setGirlsLeaderboard(girlsResponse.data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboards();
  }, []);

  const tableStyle = {
    margin: "20px auto",
    borderCollapse: "collapse",
    width: "90%",
    textAlign: "center",
    border: "1px solid #ccc",
  };

  const thStyle = {
    padding: "10px",
    backgroundColor: "#f4f4f4",
    border: "1px solid #ccc",
    fontWeight: "bold",
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #ccc",
  };

  const imgStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  };

  // Adding a responsive wrapper for tables
  const tableWrapperStyle = {
    overflowX: "auto", // Enable horizontal scroll on small screens
    WebkitOverflowScrolling: "touch", // For smooth scrolling on mobile
    maxWidth: "100%", // Ensures the table doesn't exceed the screen width
  };

  return (
    <Headandfoot>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>See who's on TOP</h1>
        <p>
          In GameOn, we have separate sports competitions for boys and girls. On
          this page, you can see separate leaderboards for boys and girls with
          fixed positions.
        </p>

        {/* Girls Leaderboard */}
        <div>
          <h2>Girls Leaderboard</h2>
          <div style={tableWrapperStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Games</th>
                  <th style={thStyle}>
                    <img src="./jaguars.png" alt="Jaguars" style={imgStyle} />
                  </th>
                  <th style={thStyle}>
                    <img
                      src="./warriors.png"
                      alt="UCP Warriors"
                      style={imgStyle}
                    />
                  </th>
                  <th style={thStyle}>
                    <img src="./hawks.png" alt="UCP Hawks" style={imgStyle} />
                  </th>
                  <th style={thStyle}>
                    <img
                      src="./gladiators.png"
                      alt="Gladiators"
                      style={imgStyle}
                    />
                  </th>
                  <th style={thStyle}>
                    <img src="./falcons.png" alt="Falcons" style={imgStyle} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {girlsLeaderboard.map((game) => (
                  <tr key={game._id}>
                    <td style={tdStyle}>
                      {game?.game?.name || "Unknown Game"}
                    </td>
                    <td style={tdStyle}>{game.points.Jaguars}</td>
                    <td style={tdStyle}>{game.points.Warriors}</td>
                    <td style={tdStyle}>{game.points.Hawks}</td>
                    <td style={tdStyle}>{game.points.Gladiators}</td>
                    <td style={tdStyle}>{game.points.Falcons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Boys Leaderboard */}
        <div>
          <h2>Boys Leaderboard</h2>
          <div style={tableWrapperStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Games</th>
                  <th style={thStyle}>
                    <img src="./jaguars.png" alt="Jaguars" style={imgStyle} />
                  </th>
                  <th style={thStyle}>
                    <img
                      src="./warriors.png"
                      alt="UCP Warriors"
                      style={imgStyle}
                    />
                  </th>
                  <th style={thStyle}>
                    <img src="./hawks.png" alt="UCP Hawks" style={imgStyle} />
                  </th>
                  <th style={thStyle}>
                    <img
                      src="./gladiators.png"
                      alt="Gladiators"
                      style={imgStyle}
                    />
                  </th>
                  <th style={thStyle}>
                    <img
                      src="./falcons.png"
                      alt="Falcons"
                      style={imgStyle}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {boysLeaderboard.map((game) => (
                  <tr key={game._id}>
                    <td style={tdStyle}>
                      {game?.game?.name || "Unknown Game"}
                    </td>
                    <td style={tdStyle}>{game.points.Jaguars}</td>
                    <td style={tdStyle}>{game.points.Warriors}</td>
                    <td style={tdStyle}>{game.points.Hawks}</td>
                    <td style={tdStyle}>{game.points.Gladiators}</td>
                    <td style={tdStyle}>{game.points.Falcons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Headandfoot>
  );
};

export default Leaderboard;
