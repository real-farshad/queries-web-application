import { handlerTypes } from "../utils/controllerTypes";
import { postQuerySchema, postSearchSchema } from "../schemas/posts";

// GET /
async function getPostsList({ database, req, res, next }: handlerTypes) {
    // make query object base on url params
    let query = {
        search: req.query.search || "",
        sort: req.query.sort || "new",
        page: req.query.page || 1,
        limit: 4,
    };

    // validate search query
    try {
        query = await postQuerySchema.validateAsync(query);
    } catch (err: any) {
        return res.status(403).json({ error: err.message });
    }

    // translate sort order to it's related post document field
    const sortKey = query.sort === "new" ? "publish_date" : "views";

    // reverse sort order to show newest and most popular first
    const sort = { [sortKey]: -1 };

    const { search, page, limit } = query;
    const skip = ((page as number) - 1) * 4;

    // search for related posts
    try {
        const result = await database.searchPostsList(search, sort, skip, limit);
        return res.json(result);
    } catch (err) {
        next(err);
    }
}

// GET /count
async function getPostsCount({ database, req, res, next }: any) {
    // get the search string from query prams
    let search = req.query.search || "";

    // validate search string
    try {
        search = await postSearchSchema.validateAsync(search);
    } catch (err: any) {
        return res.status(403).json({ error: err.message });
    }

    // count related posts
    try {
        const result = await database.countPosts(search);
        return res.json(result);
    } catch (err) {
        next(err);
    }
}

export { getPostsList, getPostsCount };
