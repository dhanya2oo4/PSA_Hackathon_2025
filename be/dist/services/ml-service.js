"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeIncident = void 0;
const ML_BASE_URL = process.env.ML_BASE_URL || "http://localhost:8000";
const analyzeIncident = async (incident) => {
    const response = await fetch(`${ML_BASE_URL}/analyze`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(incident),
    });
    if (!response.ok) {
        throw new Error(`FastAPI ML service returned ${response.status}`);
    }
    const data = await response.json();
    return data;
};
exports.analyzeIncident = analyzeIncident;
