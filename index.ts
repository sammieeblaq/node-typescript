import express from "express";
const app: express.Application = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Welcome to TypeScript"));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
