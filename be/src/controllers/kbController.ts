import { Request, Response } from "express";

export const getAllKB = (req: Request, res: Response) => {
  // Placeholder for Knowledge Base articles
interface KBArticle {
    id: string;
    title: string;
    content: string;
    tags?: string[];
    createdAt?: string; // ISO string
}

const kb: KBArticle[] = [
    // Future: fetch from vector DB or static list
];
  res.json(kb);
};

// New: return a small sample list for the frontend
export const getSampleKB = (req: Request, res: Response) => {
  const sample = [
    {
      id: "kb-1",
      title: "How to triage incidents",
      content: "A short guide on triaging incidents: identify severity, contain, eradicate, recover.",
      tags: ["triage", "incident"],
      createdAt: new Date().toISOString(),
    },
    {
      id: "kb-2",
      title: "Running a quick security checklist",
      content: "Checklist: isolate affected hosts, collect logs, rotate credentials.",
      tags: ["security", "checklist"],
      createdAt: new Date().toISOString(),
    },
  ];

  res.json({ items: sample });
};
