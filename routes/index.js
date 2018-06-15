import path from "path";
const router = require("express").Router();
import apiRoutes from "./api";

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

export default router;