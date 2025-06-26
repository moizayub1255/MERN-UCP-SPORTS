import React from "react";
import Headandfoot from "./../Layout/Headandfoot";

const Games = () => {
  return (
    <Headandfoot>
      <div className="container my-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          {/* <img
          src="logo.jpg"
          alt="UCP Game On 2025 Logo"
          className="mb-3"
          style={{ width: "120px" }}
        /> */}
          <h1 className="fw-bold">UCP Game On 2025</h1>
          <p className="text-muted">
            List of BIs and Opening Matches of ALL Games (Girls, Boys)
          </p>
        </div>

        {/* Tables Section */}
        <div className="row">
          {/* Girls Table */}
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
                    <td>
                      Falcons Vs Jaguars
                      <br />
                      Warriors Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Badminton/Table Tennis (Girls)</td>
                    <td>Jaguars</td>
                    <td>
                      Falcons Vs Hawks
                      <br />
                      Warriors Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Arm Wrestling (Girls)</td>
                    <td>Hawks</td>
                    <td>
                      Falcons Vs Warriors
                      <br />
                      Gladiators Vs Jaguars
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ludo (Girls)</td>
                    <td>Falcons</td>
                    <td>
                      Hawks Vs Warriors
                      <br />
                      Jaguars Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Chess (Girls)</td>
                    <td>Hawks</td>
                    <td>
                      Falcons Vs Gladiators
                      <br />
                      Jaguars Vs Warriors
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Table Football (Girls)</td>
                    <td>Gladiators</td>
                    <td>
                      Hawks Vs Warriors
                      <br />
                      Falcons Vs Jaguars
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>E-Gaming Takken (Girls)</td>
                    <td>Hawks</td>
                    <td>
                      Warriors Vs Jaguars
                      <br />
                      Falcons Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>E-Gaming Blur (Girls)</td>
                    <td>Hawks</td>
                    <td>
                      Falcons Vs Jaguars
                      <br />
                      Warriors Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>E-Gaming PUBG (Girls)</td>
                    <td>Hawks</td>
                    <td>
                      Falcons Vs Jaguars
                      <br />
                      Warriors Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Tug of War (Girls)</td>
                    <td>Gladiators</td>
                    <td>
                      Hawks Vs Falcons
                      <br />
                      Warriors Vs Jaguars
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>50 m Race (Girls)</td>
                    <td></td>
                    <td>All Teams Play at a time</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Sack Race (Girls)</td>
                    <td></td>
                    <td>All Teams Play at a time</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Three Leg Race (Girls)</td>
                    <td></td>
                    <td>All Teams Play at a time</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Egg Spoon Race (Girls)</td>
                    <td></td>
                    <td>All Teams Play at a time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Boys Table */}
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
                    <td>Falcons</td>
                    <td>
                      Jaguars Vs Gladiators
                      <br />
                      Warriors Vs Hawks
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Snooker</td>
                    <td>Hawks</td>
                    <td>
                      Falcons Vs Jaguars
                      <br />
                      Warriors Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Badminton/Table Tennis (Boys)</td>
                    <td>Hawks</td>
                    <td>
                      Falcons Vs Jaguars
                      <br />
                      Warriors Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Arm Wrestling (Boys)</td>
                    <td>Gladiators</td>
                    <td>
                      Falcons Vs Hawks
                      <br />
                      Jaguars Vs Warriors
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Ludo (Boys)</td>
                    <td>Gladiators</td>
                    <td>
                      Hawks Vs Warriors
                      <br />
                      Jaguars Vs Falcons
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Chess (Boys)</td>
                    <td>Warriors</td>
                    <td>
                      Falcons Vs Hawks
                      <br />
                      Jaguars Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Table Football (Boys)</td>
                    <td>Jaguars</td>
                    <td>
                      Hawks Vs Warriors
                      <br />
                      Falcons Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Pillow Fight</td>
                    <td>Hawks</td>
                    <td>
                      Gladiators Vs Warriors
                      <br />
                      Falcons Vs Jaguars
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Volleyball</td>
                    <td>Warriors</td>
                    <td>
                      Jaguars Vs Falcons
                      <br />
                      Hawks Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>100 m Race (Boys)</td>
                    <td></td>
                    <td>All Teams Play at a Time</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Tug of War (Boys)</td>
                    <td>Gladiators</td>
                    <td>
                      Falcons Vs Warriors
                      <br />
                      Hawks Vs Jaguars
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Futsal</td>
                    <td>Gladiators</td>
                    <td>
                      Falcons Vs Jaguars
                      <br />
                      Warriors Vs Hawks
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Carrom (Boys)</td>
                    <td>Warriors</td>
                    <td>
                      Jaguars Vs Falcons
                      <br />
                      Hawks Vs Gladiators
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>E-Gaming Takken (Boys)</td>
                    <td>Hawks</td>
                    <td>
                      Jaguars Vs Gladiators
                      <br />
                      Warriors Vs Falcons
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>E-Gaming Fifa (Boys)</td>
                    <td>Hawks</td>
                    <td>
                      Jaguars Vs Gladiators
                      <br />
                      Warriors Vs Falcons
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>E-Gaming PUBG (Boys)</td>
                    <td>Hawks</td>
                    <td>
                      Jaguars Vs Gladiators
                      <br />
                      Warriors Vs Falcons
                    </td>
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
