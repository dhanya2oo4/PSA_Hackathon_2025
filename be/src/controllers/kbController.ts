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
