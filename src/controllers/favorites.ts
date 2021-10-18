import { handlerTypes, controllerTypes } from "../utils/controllerTypes";
import database from "../services/favorites";
import schema from "../schemas/favorites";

// GET /
const getFavoritesList: controllerTypes = (req, res, next) => {
    return getFavoritesListHandler({ database, req, res, next });
};

async function getFavoritesListHandler({ database, req, res, next }: handlerTypes) {
    try {
        const result: any = await database.getFavoritesList();
        return res.json(result);
    } catch (err) {
        next(err);
    }
}

// GET /:id
const getFavoriteById: controllerTypes = (req, res, next) => {
    return getFavoriteByIdHandler({ database, req, res, next });
};

async function getFavoriteByIdHandler({ database, req, res, next }: handlerTypes) {
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
const createFavorite: controllerTypes = (req, res, next) => {
    return createFavoriteHandler({ database, req, res, next });
};

async function createFavoriteHandler({ database, req, res, next }: handlerTypes) {
    let value;
    try {
        value = await schema.validateAsync(req.body);
    } catch (err: any) {
        return res.json({ error: err.message });
    }

    try {
        const insertedId = await database.addFavorite(value);
        return res.json({ id: insertedId });
    } catch (err) {
        next(err);
    }
}

// PUT /:id
const updateFavoriteById: controllerTypes = (req, res, next) => {
    return updateFavoriteByIdHandler({ database, req, res, next });
};

async function updateFavoriteByIdHandler({ database, req, res, next }: handlerTypes) {
    let value;
    try {
        value = await schema.validateAsync(req.body);
    } catch (err: any) {
        return res.json({ error: err.message });
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
const deleteFavoriteById: controllerTypes = (req, res, next) => {
    return deleteFavoriteByIdHandler({ database, req, res, next });
};

async function deleteFavoriteByIdHandler({ database, req, res, next }: handlerTypes) {
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
