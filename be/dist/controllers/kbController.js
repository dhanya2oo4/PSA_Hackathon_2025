"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSampleKB = exports.getAllKB = void 0;
const getAllKB = (req, res) => {
    const kb = [
    // Future: fetch from vector DB or static list
    ];
    res.json(kb);
};
exports.getAllKB = getAllKB;
// New: return a small sample list for the frontend
const getSampleKB = (req, res) => {
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
exports.getSampleKB = getSampleKB;
