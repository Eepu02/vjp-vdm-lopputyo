import getResponse from "./utils/openai.js";

import express from "express";
import * as path from "path";
import { config } from "dotenv";

config();

const app = express();

app.use(express.static(path.join(process.cwd(), "build")));
app.use(express.json());

app.get("/api", (req, res) => {
    console.log("got a simple get request");
    res.status(200).json({ message: "OLD Data from server using GET!" });
});

app.post("/api", async (req, res) => {
    console.log("got request: " + JSON.stringify(req.body));
    // handle(req.body).then((data) => res.json(data));
    res.json(await getResponse(req.body));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Ready on port ${process.env.SERVER_PORT}!`);
});
