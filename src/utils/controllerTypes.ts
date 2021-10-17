import { Request, Response, NextFunction } from "express";

type handlerTypes = {
    database: any;
    req: Request;
    res: Response;
    next: NextFunction;
};

type controllerTypes = (req: Request, res: Response, next: NextFunction) => any;

export { handlerTypes, controllerTypes };
