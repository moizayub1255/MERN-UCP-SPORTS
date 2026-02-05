import React from "react";
import Headandfoot from "./../Layout/Headandfoot";

const Games = () => {
  return (
    <Headandfoot>
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">UCP Game On 2025</h1>
          <p className="text-muted">List of BIs and Opening Matches</p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mx-auto">
            <h3 className="text-center mb-3">Girls</h3>
            <div
              className="table-responsive"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <table className="table table-bordered table-hover">
                <thead className="table-danger text-center">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Game</th>
                    <th>BI</th>
                    <th>Opening Matches</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>1</td>
                    <td>Cricket (Girls)</td>
                    <td>Hawks</td>
                    <td>Jaguars vs Warriors</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Badminton/Table Tennis (Girls)</td>
                    <td>Jaguars</td>
                    <td>Hawks vs Gladiators</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Arm Wrestling (Girls)</td>
                    <td>Hawks</td>
                    <td>Warriors vs Jaguars</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ludo (Girls)</td>
                    <td>Jaguars</td>
                    <td>Hawks vs Warriors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mx-auto">
            <h3 className="text-center mb-3">Boys</h3>
            <div
              className="table-responsive"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <table className="table table-bordered table-hover">
                <thead className="table-primary text-center">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Game</th>
                    <th>BI</th>
                    <th>Opening Matches</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>1</td>
                    <td>Cricket (Boys)</td>
                    <td>Jaguars</td>
                    <td>Jaguars vs Gladiators</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Snooker</td>
                    <td>Hawks</td>
                    <td>Jaguars vs Warriors</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Badminton/Table Tennis (Boys)</td>
                    <td>Hawks</td>
                    <td>Warriors vs Gladiators</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Headandfoot>
  );
};

export default Games;
