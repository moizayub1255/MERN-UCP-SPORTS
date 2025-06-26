import mongoose from "mongoose";

const pointsSchema = new mongoose.Schema({
  teamName: { type: String, required: true, unique: true },
  img: { type: String, required: false },  
  points: { type: Number, required: true, default: 0 }
});

const Points = mongoose.model("Points", pointsSchema);

export default Points;
