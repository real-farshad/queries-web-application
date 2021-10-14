import dotenv from "dotenv";
import express from "express";

// use environment variables
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    return res.send("Working as intended.");
});

const port = process.env.PORT || "3000";
app.listen(port, () => {
    const env = process.env.NODE_ENV || "development";
    return console.log(`[${env.toUpperCase()}] - listening on port ${port}...`);
});
