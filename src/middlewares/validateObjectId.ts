import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongodb";

type validateObjectId = (
    req: Request,
    res: Response,
    next: NextFunction
) => any;

const validateObjectId: validateObjectId = async (req, res, next) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) return res.json({ error: "invalid id!" });
    else next();
};

export default validateObjectId;
