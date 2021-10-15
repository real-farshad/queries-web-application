import dotenv from "dotenv";
import express from "express";
import { connectToDb } from "./config/mongodb";
import routes from "./routes/index";
import errorHandler from "./middlewares/error-handler";

// use environment variables
dotenv.config();

const app = express();

// parse incoming request bodies
app.use(express.json());

// routes
app.use("/api", routes);

// default error handler
app.use(errorHandler);

// connect to mongodb
const uri = process.env.MONGODB_URI as string;
const dbName = process.env.DB_NAME as string;
connectToDb(uri, dbName);

// listen for requests
const port = (process.env.PORT as string) || "3000";
app.listen(port, () => {
    const env = process.env.NODE_ENV as string;
    return console.log(`[${env.toUpperCase()}] - listening on port ${port}...`);
});
