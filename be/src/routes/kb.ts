// KB routes file
import express from "express";

const router = express.Router();

// GET /api/kb - placeholder route returning KB items
router.get("/", (req, res) => {
  res.json({ message: "Knowledge base root", items: [] });
});

export default router;