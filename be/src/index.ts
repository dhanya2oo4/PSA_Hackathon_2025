import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import incidentRoutes from "./routes/incidents";
import kbRoutes from "./routes/kb";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/incidents", incidentRoutes);
app.use("/api/kb", kbRoutes);

// Homepage route
app.get("/", (req, res) => {
  res.send("Welcome to the PORTNET AI Incident Manager API 🚢");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
