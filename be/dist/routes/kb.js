"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// KB routes file
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// GET /api/kb - placeholder route returning KB items
router.get("/", (req, res) => {
    res.json({ message: "Knowledge base root", items: [] });
});
exports.default = router;
