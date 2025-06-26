import React, { useState } from "react";
import Headandfoot from "../Layout/Headandfoot";
import { Link } from "react-router-dom";  

const Events = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState(null);
  // const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const events = [
    {
      image: "cricket.jpg",
      title: "Cricket Championship",
      description:
        "Join the thrilling cricket matches and showcase your batting and bowling skills! The Cricket Championship is a test of teamwork, strategy, and resilience. Each over brings a new challenge, demanding players to adapt and execute their plans with precision. ",
      join: "Take Part",
      link: "/register-now" 
    },
    {
      image: "football.jpg",
      title: "Football Tournament",
      description:
        "Experience the excitement of football and compete with the best teams in the university. The Football Tournament is your chance to experience the adrenaline of intense competition. Build seamless coordination with your teammates to score goals and dismantle defenses. ",
      join: "Take Part",
      link: "/register-now"
    },
    {
      image: "badminton.jpg",
      title: "Badminton Competition",
      description:
        "Smash your way to victory in the badminton singles and doubles tournaments.The Badminton Competition invites players to showcase their agility, precision, and quick reflexes. Compete in thrilling singles and doubles matches, where every serve and smash will test your skills. ",
      join: "Take Part",
      link: "/register-now"
    },
    {
      image: "tabletennis.jpg",
      title: "Table Tennis Challenge",
      description:
        "Show off your ping pong skills in the ultimate table tennis showdown.The Table Tennis Challenge is a platform for showcasing lightning-fast reflexes and impeccable hand-eye coordination. Every match will push your limits as you master spins, smashes, and precise serves. ",
      join: "Take Part",
      link: "/register-now"
    },
    {
      image: "athletic.jpg",
      title: "Athletics Meet",
      description:
        "Push your limits in track and field events and bring glory to your team. The Athletics Meet is a celebration of speed, strength, and stamina. Compete in a variety of track and field events designed to test your physical and mental limits.",
      join: "Take Part",
      link: "/register-now"
    },
    {
      image: "arm.jpg",
      title: "Arm Wrestling",
      description:
        "Arm wrestling is a strength-based sport where two opponents lock hands and try to force the other's arm down onto a surface. It tests endurance, technique, and muscle power. This activity is often enjoyed casually and professionally in competitions.",
      join: "Take Part",
      link: "/register-now"
    },
    {
      image: "table.jpg",
      title: "Table Football",
      description:
        "Table football, or foosball, is a tabletop game that simulates soccer using miniature players mounted on rods. Players rotate and slide the rods to control the figures and score goals. It is a fun and engaging game played in homes, clubs, and tournaments. ",
      join: "Take Part",
      link: "/register-now"
    },
    // {
    //   image: "ping.jpg",
    //   title: "Table Tennis",
    //   description:
    //     "Table tennis, also known as ping-pong, is a fast-paced indoor game played on a table with a lightweight ball and paddles. Players aim to score points by hitting the ball over a net so the opponent cannot return it. It is a popular recreational and competitive sport worldwide. ",
    //   join: "Take Part",
    //   link: "/register-now"
    // },
    {
      image: "chess.jpg",
      title: "Board Games",
      description:
        "Board games are tabletop games that involve strategy, skill, and sometimes luck, played on a board or surface. Popular board games include Ludo, Carrom, and Chess, each offering unique challenges and entertainment. These games bring people together, encouraging social interaction and friendly competition.",
      join: "Take Part",
      link: "/register-now"
    },
  ];

  return (
    <Headandfoot>
      <div>
        {/* <div
          className="text-center text-white bg-dark py-5"
          style={{
            backgroundImage: `url('events.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="banner-text">
            <h1 className="text-white">Events</h1>
          </div>
        </div> */}

        <div className="container py-5">
          <h1 className="d-flex justify-content-center">
            Know about our Top Events
          </h1>
          {events.map((event, index) => (
            <div
              className={`row align-items-center my-4 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
              key={index}
            >
              <div className="col-md-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6 p-4">
                <h3 className="d-flex justify-content-center">{event.title}</h3>
                <p className="custom-text-justify">{event.description}</p>
                <Link to={event.link}>
                  <button className="btn btn-primary mx-auto d-block">
                    {event.join}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Headandfoot>
  );
};

export default Events;
