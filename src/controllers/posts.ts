import { handlerTypes, controllerTypes } from "../utils/controllerTypes";
import database from "../services/posts";
import schema from "../schemas/posts";

// GET /
const getPostsList: controllerTypes = (req, res, next) => {
    return getPostsListHandler({ database, req, res, next });
};

async function getPostsListHandler({ database, req, res, next }: handlerTypes) {
    try {
        const result: any = await database.getPostsList();
        return res.json(result);
    } catch (err) {
        next(err);
    }
}

// GET /:id
const getPostById: controllerTypes = (req, res, next) => {
    return getPostByIdHandler({ database, req, res, next });
};

async function getPostByIdHandler({ database, req, res, next }: handlerTypes) {
    try {
        const result = await database.findPostById(req.params.id);
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
const createPost: controllerTypes = (req, res, next) => {
    return createPostHandler({ database, req, res, next });
};

async function createPostHandler({ database, req, res, next }: handlerTypes) {
    let value;
    try {
        value = await schema.validateAsync(req.body);
    } catch (err: any) {
        return res.json({ error: err.message });
    }

    try {
        const insertedId = await database.addPost(value);
        return res.json({ id: insertedId });
    } catch (err) {
        next(err);
    }
}

// PUT /:id
const updatePostById: controllerTypes = (req, res, next) => {
    return updatePostByIdHandler({ database, req, res, next });
};

async function updatePostByIdHandler({ database, req, res, next }: handlerTypes) {
    let value;
    try {
        value = await schema.validateAsync(req.body);
    } catch (err: any) {
        return res.json({ error: err.message });
    }

    try {
        const [matchedCount, modifiedCount] = await database.updatePostById(
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
const deletePostById: controllerTypes = (req, res, next) => {
    return deletePostByIdHandler({ database, req, res, next });
};

async function deletePostByIdHandler({ database, req, res, next }: handlerTypes) {
    const deletedCount = await database.deletePostById(req.params.id);

    if (deletedCount !== 1) {
        return res.status(404).json({ error: "no document with this id was found!" });
    }

    return res.json({ deletedCount });
}

export { getPostsList, getPostById, createPost, updatePostById, deletePostById };
