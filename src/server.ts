import path from "path";
import dotenv from "dotenv";
import express from "express";
import { connectToDb } from "./config/mongodb";
import routes from "./routes/index";
import errorHandler from "./middlewares/errorHandler";

// use environment variables
dotenv.config();

const app = express();

// parse incoming request bodies
app.use(express.json());

// Serve static files
app.use(express.static(path.resolve(__dirname, "../public")));

// routes
app.use("/api", routes);

// default error handler
app.use(errorHandler);

// connect to mongodb
const uri = process.env.MONGODB_URI as string;
const dbName = process.env.DB_NAME as string;

try {
    connectToDb(uri, dbName);
} catch (err) {
    throw new Error("unable to connect to mongodb!");
}

// listen for requests
const port = (process.env.PORT as string) || "3000";
app.listen(port, () => {
    const env = process.env.NODE_ENV as string;
    return console.log(`[${env.toUpperCase()}] - listening on port ${port}...`);
});
