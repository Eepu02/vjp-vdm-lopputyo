import getResponse from "./utils/LLMService.mjs";

import express from "express";
import * as path from "path";
import { config } from "dotenv";

config();

const PORT = process.env.SERVER_PORT || 9000;
const app = express();

app.use(express.static(path.join(process.cwd(), "build")));
app.use(express.json());

// GET /api for health check
app.get("/api", (req, res) => {
    res.sendStatus(200);
});

app.post("/api", async (req, res) => {
    res.json(await getResponse(req.body));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Ready on port ${PORT}!`);
});
