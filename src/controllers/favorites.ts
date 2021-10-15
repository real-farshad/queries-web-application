import { Request, Response, NextFunction } from "express";

// type definition
type controllerType = (req: Request, res: Response, next: NextFunction) => any;

const getFavorites: controllerType = async (req, res, next) => {};

export { getFavorites };
