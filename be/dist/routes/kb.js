"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// KB routes file
const express_1 = __importDefault(require("express"));
const kbController_1 = require("../controllers/kbController");
const router = express_1.default.Router();
// GET /api/kb - placeholder root
router.get("/", (req, res) => {
    res.json({ message: "Knowledge base root", items: [] });
});
// GET /api/kb/sample - return small sample payload for frontend
router.get("/sample", kbController_1.getSampleKB);
exports.default = router;
