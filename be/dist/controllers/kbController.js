"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllKB = void 0;
const getAllKB = (req, res) => {
    const kb = [
    // Future: fetch from vector DB or static list
    ];
    res.json(kb);
};
exports.getAllKB = getAllKB;
