"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const incidentController_1 = require("../controllers/incidentController");
const router = (0, express_1.Router)();
router.get("/", incidentController_1.getAllIncidents); // GET /api/incidents
router.get("/sample", incidentController_1.getSampleIncidents); // GET /api/incidents/sample
router.get("/:id", incidentController_1.getIncidentById); // GET /api/incidents/:id
router.post("/", incidentController_1.createIncident); // POST /api/incidents
exports.default = router;
