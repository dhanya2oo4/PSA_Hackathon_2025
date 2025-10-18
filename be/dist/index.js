"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const incidents_1 = __importDefault(require("./routes/incidents"));
const kb_1 = __importDefault(require("./routes/kb"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api/incidents", incidents_1.default);
app.use("/api/kb", kb_1.default);
// Homepage route
app.get("/", (req, res) => {
    res.send("Welcome to the PORTNET AI Incident Manager API 🚢");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
