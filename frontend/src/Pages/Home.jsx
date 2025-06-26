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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/points`);
        const data = await response.json();
        setPointsData(data); // Set the fetched data in context
      } catch (error) {
        console.error("Error fetching points data:", error);
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
            {(pointsData || [])
              .sort((a, b) => b.points - a.points) // Sort teams by points in descending order
              .map((team, index) => (
                <tr key={team._id} className="text-center">
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
                  <td>{team.points}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h1 className="d-flex justify-content-center">Our Teams</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4 d-flex justify-content-center">
        {pointsData.map((team) => (
          <img key={team._id} src={team.img} alt={team.teamName} />
        ))}
      </div>
      <AboutMe></AboutMe>
    </Headandfoot>
  );
};

export default Home;