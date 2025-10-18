// KB routes file
import express from "express";
import { getSampleKB } from "../controllers/kbController";

const router = express.Router();

// GET /api/kb - placeholder root
router.get("/", (req, res) => {
  res.json({ message: "Knowledge base root", items: [] });
});

// GET /api/kb/sample - return small sample payload for frontend
router.get("/sample", getSampleKB);

export default router;