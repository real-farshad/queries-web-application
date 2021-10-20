import { handlerTypes, controllerTypes } from "../utils/controllerTypes";
import database from "../services/posts";
import { postQuerySchema } from "../schemas/posts";

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

    const { search, sort, page, limit } = query;
    const skip = ((page as number) - 1) * 4;

    // search for documents
    try {
        const result: object[] = await database.searchPostsList(
            search,
            sort,
            skip,
            limit
        );

        return res.json(result);
    } catch (err) {
        next(err);
    }
}

export { getPostsList };
