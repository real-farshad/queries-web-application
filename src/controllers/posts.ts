import { handlerTypes, controllerTypes } from "../utils/controllerTypes";
import database from "../services/posts";
import { postQuerySchema, postSearchSchema } from "../schemas/posts";

// GET /
const getPostsList: controllerTypes = (req, res, next) => {
    return getPostsListHandler({ database, req, res, next });
};

async function getPostsListHandler({ database, req, res, next }: handlerTypes) {
    // make query object base on url params
    let query = {
        search: req.query.search || "",
        sort: req.query.sort || "publish_date",
        page: req.query.page || 1,
        limit: 4,
    };

    // validate search query
    try {
        query = await postQuerySchema.validateAsync(query);
    } catch (err: any) {
        return res.status(403).json({ error: err.message });
    }

    // reverse sort order
    const sort = { [query.sort as string]: -1 };

    const { search, page, limit } = query;
    const skip = ((page as number) - 1) * 4;

    // search for documents
    try {
        const result = await database.searchPostsList(search, sort, skip, limit);
        return res.json(result);
    } catch (err) {
        next(err);
    }
}

const getPostsCount: controllerTypes = (req, res, next) => {
    return getPostsCountHandler({ database, req, res, next });
};

async function getPostsCountHandler({ database, req, res, next }: any) {
    let search = req.query.search || "";

    // validate search query
    try {
        search = await postSearchSchema.validateAsync(search);
    } catch (err: any) {
        return res.status(403).json({ error: err.message });
    }

    try {
        const result = await database.countPosts(search);
        return res.json(result);
    } catch (err) {
        next(err);
    }
}

export { getPostsList, getPostsCount };
