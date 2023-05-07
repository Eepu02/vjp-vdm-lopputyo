import handle from "./utils/openai.js";

// import * as express from "express";
import express from "express";
import * as path from "path";
import { config } from "dotenv";

config();

const app = express();

app.use(express.static(path.join(process.cwd(), "build")));
app.use(express.json());

console.log(process.cwd());

app.get("/api", (req, res) => {
    res.json({ message: "Data from server using GET!" });
});

app.post("/api", (req, res) => {
    console.log("got request: " + JSON.stringify(req.body));
    res.json(handle());
});

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

app.listen(process.env.PORT, () => {
    console.log(`Ready on port ${process.env.PORT}!`);
});
