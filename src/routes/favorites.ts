import express from "express";
import validateObjectId from "../middlewares/validateObjectId";
import db from "../services/favorites";
import schema from "../schemas/favorites";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        // query db
        const result = await db.findFirstSixFavorites();
        return res.json(result);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", validateObjectId, async (req, res, next) => {
    try {
        // search for a document with this id
        const result = await db.findSingleFavoriteById(req.params.id);

        // return an error if none was found
        if (!result) {
            return res.json({
                error: "no document with this id was found!",
            });
        }

        // return the document if it is valid
        return res.json(result);
    } catch (err) {
        return next(err);
    }
});

router.post("/", async (req, res, next) => {
    let value;
    try {
        // validate requet's body
        value = await schema.validateAsync(req.body);
    } catch (err: any) {
        return res.json({ error: err.message });
    }

    try {
        // insert new document to the collection
        const insertedId = await db.addNewFavorite(value);
        return res.json({ id: insertedId });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", validateObjectId, async (req, res, next) => {
    let value;
    try {
        // validate requet's body
        value = await schema.validateAsync(req.body);
    } catch (err: any) {
        return res.json({ error: err.message });
    }

    try {
        // update the document if it exists in the db
        const [matchedCount, modifiedCount] = await db.updateSingleFavorite(
            req.params.id,
            value
        );

        if (matchedCount !== 1) {
            return res
                .status(404)
                .json({ error: "no document with this id was found!" });
        }

        // return the number of modified documents
        return res.json({ modifiedCount: modifiedCount });
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", validateObjectId, async (req, res, next) => {
    // delete the document
    const deletedCount = await db.deleteSingleFavorite(req.params.id);

    if (deletedCount !== 1) {
        return res
            .status(404)
            .json({ error: "no document with this id was found!" });
    }

    // return the number of deleted documents
    return res.json({ deletedCount });
});

export default router;
