import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
// import { isAdmin, protect } from "./middlewares/authMiddleware.js";
// import mongoose from "mongoose";
import bodyParser from "body-parser";
import Points from "./models/Points.js";
import gameRoutes from "./routes/gameRoutes.js";
import pointsRoutes from "./routes/pointsRoutes.js";
import pointsTableRoutes from "./routes/pointsTableRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Test
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

app.use("/api/games", gameRoutes);
app.use("/api/points-table", pointsTableRoutes);
app.use("/api/points", pointsRoutes);
app.use("/api/v1/auth", authRoutes);

// Function to seed the default teams if not already in the database
const seedTeams = async () => {
  const defaultTeams = [
    { teamName: "Jaguars", img: "jaguars.png", points: 0 },
    { teamName: "Warriors", img: "warriors.png", points: 0 },
    { teamName: "Hawks", img: "hawks.png", points: 0 },
    { teamName: "Gladiators", img: "gladiators.png", points: 0 },
    { teamName: "Falcons", img: "falcons.png", points: 0 },
  ];



  try {
    // Insert default teams only if they don't already exist
    for (const team of defaultTeams) {
      const existingTeam = await Points.findOne({ teamName: team.teamName });
      if (!existingTeam) {
        await Points.create(team);
      }
    }
    console.log("Default teams seeded successfully.");
  } catch (error) {
    console.error("Error seeding teams:", error);
  }
};

// Call seedTeams function to seed the database
seedTeams();

// mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/Ucp-Sports", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Could not connect to MongoDB:", err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


export default app;