const router = require("express").Router();
import authRoutes from "./auth";
import petRoutes from "./pet";

// Auth routes
router.use(authRoutes);

//Api routes
router.use(petRoutes);

export default router;