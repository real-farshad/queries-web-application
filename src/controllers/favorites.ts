import { handlerTypes } from "../utils/controllerTypes";
import favoriteSchema from "../schemas/favorites";

// GET /
async function getFavoritesList({ database, req, res, next }: handlerTypes) {
    try {
        const result: any = await database.getFavoritesList();
        return res.json(result);
    } catch (err) {
        next(err);
    }
}

// GET /:id
async function getFavoriteById({ database, req, res, next }: handlerTypes) {
    try {
        const result = await database.findFavoriteById(req.params.id);
        if (!result) {
            return res.json({
                error: "no document with this id was found!",
            });
        }

        return res.json(result);
    } catch (err) {
        return next(err);
    }
}

// POST /
async function createFavorite({ database, req, res, next }: handlerTypes) {
    let value;
    try {
        value = await favoriteSchema.validateAsync(req.body);
    } catch (err: any) {
        return res.status(403).json({ error: err.message });
    }

    try {
        const insertedId = await database.addFavorite(value);
        return res.json({ id: insertedId });
    } catch (err) {
        next(err);
    }
}

// PUT /:id
async function updateFavoriteById({ database, req, res, next }: handlerTypes) {
    let value;
    try {
        value = await favoriteSchema.validateAsync(req.body);
    } catch (err: any) {
        return res.status(403).json({ error: err.message });
    }

    try {
        const [matchedCount, modifiedCount] = await database.updateFavoriteById(
            req.params.id,
            value
        );

        if (matchedCount !== 1) {
            return res.status(404).json({ error: "no document with this id was found!" });
        }

        return res.json({ modifiedCount: modifiedCount });
    } catch (err) {
        next(err);
    }
}

// DELETE /:id
async function deleteFavoriteById({ database, req, res, next }: handlerTypes) {
    const deletedCount = await database.deleteFavoriteById(req.params.id);

    if (deletedCount !== 1) {
        return res.status(404).json({ error: "no document with this id was found!" });
    }

    return res.json({ deletedCount });
}

export {
    getFavoritesList,
    getFavoriteById,
    createFavorite,
    updateFavoriteById,
    deleteFavoriteById,
};
