import React, { useEffect } from "react";
import Headandfoot from "../Layout/Headandfoot";
import "../Styles/Home.css";
import AboutMe from "./Aboutme";
import { usePoints } from "../PointsContext";

const Home = () => {
  const { pointsData, setPointsData } = usePoints();

  // Fetch points data from backend
  useEffect(() => {
    const fetchPointsData = async () => {
      try {
        // Fetch overall leaderboard from the new PointsTable model
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/points-table?category=overall`,
        );
        const overallData = await response.json();

        console.log(
          "Overall leaderboard data from /api/points-table:",
          overallData,
        );

        // If we have overall data, transform it
        if (Array.isArray(overallData) && overallData.length > 0) {
          // Get all teams and their total points across all games
          const teamTotals = {};
          const teamImages = {
            Jaguars: "./jaguars.png",
            Warriors: "./warriors.png",
            Hawks: "./hawks.png",
            Gladiators: "./gladiators.png",
            Falcons: "./falcons.png",
          };

          // Sum up points for each team across all games
          overallData.forEach((game) => {
            if (game.points) {
              Object.entries(game.points).forEach(([teamName, points]) => {
                if (!teamTotals[teamName]) {
                  teamTotals[teamName] = {
                    teamName,
                    points: 0,
                    img: teamImages[teamName] || "./default.png",
                    _id: teamName,
                  };
                }
                teamTotals[teamName].points += parseInt(points) || 0;
              });
            }
          });

          // Convert to array and set in context
          const formattedData = Object.values(teamTotals);
          console.log("Formatted team totals:", formattedData);
          setPointsData(formattedData);
        } else {
          console.log("No overall data found, fetching from old Points model");
          // Fallback to old Points model if no overall data exists
          const legacyResponse = await fetch(
            `${import.meta.env.VITE_API_URL}/api/points`,
          );
          const legacyData = await legacyResponse.json();
          console.log("Legacy points data:", legacyData);
          setPointsData(Array.isArray(legacyData) ? legacyData : []);
        }
      } catch (error) {
        console.error("Error fetching points data:", error);
        setPointsData([]);
      }
    };

    fetchPointsData();
  }, [setPointsData]);

  return (
    <Headandfoot>
      <div className="video-container">
        <video
          src="RealVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        ></video>
      </div>
      <div className="container py-5">
        <h1 className="text-center mb-4">Points Table</h1>
        <p className="text-center">
          The points table displays the overall (Boys & Girls) standings of all
          teams based on their accumulated points and the number of matches
          played. As the competition progresses, you’ll see frequent updates in
          the rankings. To Check Boys and Girls Standings Separately, visit the
          Leaderboard Page.
        </p>
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col" className="text-center">
                Rank
              </th>
              <th scope="col" className="text-center">
                Team
              </th>
              <th scope="col" className="text-center">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {(pointsData || []).length > 0 ? (
              (pointsData || [])
                .sort((a, b) => (b.points || 0) - (a.points || 0)) // Sort teams by points in descending order
                .map((team, index) => (
                  <tr key={team._id || team.teamName} className="text-center">
                    <td>{index + 1}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={team.img}
                          alt={team.teamName}
                          style={{
                            width: "40px",
                            height: "40px",
                            marginRight: "10px",
                            borderRadius: "50%",
                          }}
                        />
                        {team.teamName}
                      </div>
                    </td>
                    <td>{team.points || 0}</td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No games added yet. Check back soon!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h1 className="d-flex justify-content-center">Our Teams</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4 d-flex justify-content-center">
        {(pointsData || []).length > 0 ? (
          (pointsData || []).map((team) => (
            <img
              key={team._id || team.teamName}
              src={team.img}
              alt={team.teamName}
            />
          ))
        ) : (
          <p className="text-center w-100">
            Teams will be displayed once games are created.
          </p>
        )}
      </div>

      {/* <AboutMe></AboutMe> */}
    </Headandfoot>
  );
};

export default Home;
