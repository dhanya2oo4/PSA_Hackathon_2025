import { Router } from "express";
import {
  getAllIncidents,
  getIncidentById,
  createIncident,
  getSampleIncidents,
} from "../controllers/incidentController";

const router = Router();

router.get("/", getAllIncidents);      // GET /api/incidents
router.get("/sample", getSampleIncidents); // GET /api/incidents/sample
router.get("/:id", getIncidentById);   // GET /api/incidents/:id
router.post("/", createIncident);      // POST /api/incidents

export default router;
