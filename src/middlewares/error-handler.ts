import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    return res.status(500).send("Something went wrong!");
};

export default errorHandler;
