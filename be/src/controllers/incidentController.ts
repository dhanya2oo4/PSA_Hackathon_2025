import { Request, Response } from "express";
import { analyzeIncident } from "../services/ml-service";
import { Incident } from "../utils/type";

let incidents: Incident[] = []; // In-memory store for now

export const getAllIncidents = (req: Request, res: Response) => {
  res.json(incidents);
};

export const getIncidentById = (req: Request, res: Response) => {
  const { id } = req.params;
  const incident = incidents.find((i) => i.id === id);
  if (!incident) {
    return res.status(404).json({ error: "Incident not found" });
  }
  res.json(incident);
};

export const createIncident = async (req: Request, res: Response) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ error: "Description is required" });
  }

  try {
    // Call the FastAPI ML service for classification/RAG
    const analysis = await analyzeIncident({ description });

    const newIncident: Incident = {
      id: (incidents.length + 1).toString(),
      description,
      analysis,
      createdAt: new Date().toISOString(),
    };

    incidents.push(newIncident);
    res.status(201).json(newIncident);
  } catch (error) {
    console.error("Error creating incident:", error);
    res.status(500).json({ error: "Failed to analyze incident" });
  }
};
