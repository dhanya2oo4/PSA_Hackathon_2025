"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIncident = exports.getIncidentById = exports.getAllIncidents = void 0;
const ml_service_1 = require("../services/ml-service");
let incidents = []; // In-memory store for now
const getAllIncidents = (req, res) => {
    res.json(incidents);
};
exports.getAllIncidents = getAllIncidents;
const getIncidentById = (req, res) => {
    const { id } = req.params;
    const incident = incidents.find((i) => i.id === id);
    if (!incident) {
        return res.status(404).json({ error: "Incident not found" });
    }
    res.json(incident);
};
exports.getIncidentById = getIncidentById;
const createIncident = async (req, res) => {
    const { description } = req.body;
    if (!description) {
        return res.status(400).json({ error: "Description is required" });
    }
    try {
        // Call the FastAPI ML service for classification/RAG
        const analysis = await (0, ml_service_1.analyzeIncident)({ description });
        const newIncident = {
            id: (incidents.length + 1).toString(),
            description,
            analysis,
            createdAt: new Date().toISOString(),
        };
        incidents.push(newIncident);
        res.status(201).json(newIncident);
    }
    catch (error) {
        console.error("Error creating incident:", error);
        res.status(500).json({ error: "Failed to analyze incident" });
    }
};
exports.createIncident = createIncident;
