import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Protect route middleware
export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Received Token:", token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded User:", decoded);

      req.user = await User.findById(decoded._id).select("-password");
      console.log("User Found in DB:", req.user);

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error("Token Verification Failed:", error);
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      }
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    console.log("No Token Provided");
    res.status(401).json({ message: "Not authorized, no token" });
  }
};


// Admin route middleware
export const admin = (req, res, next) => {
  // Log the user object to check if it's populated
  console.log("User role:", req.user ? req.user.role : "No user found");

  // Check if the user is an admin
  if (req.user && req.user.role === "admin") {
    next(); // Proceed to the next middleware
  } else {
    // If the user is not an admin
    res.status(403).json({ message: "Not authorized as admin" });
  }
};
