import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { protect , admin } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

// Public routes
// REGISTER 
router.post("/register", registerController);

// LOGIN 
router.post("/login", loginController);

// Forgot Password 
router.post("/forgot-password", forgotPasswordController);

// Test 
router.get("/test", protect,admin, testController);

// Admin routes 
router.use("/admin", protect, admin); 

router.get("/admin/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});




export default router;
