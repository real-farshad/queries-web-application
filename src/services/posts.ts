import { db } from "../config/mongodb";

type searchPostsListTypes = (
    search: string,
    sort: {},
    skip: number,
    limit: number
) => Promise<object[]>;

const searchPostsList: searchPostsListTypes = async (search, sort, skip, limit) => {
    const find = search.length === 0 ? {} : { $text: { $search: search } };
    const cursor = await db
        .collection("posts")
        .find(find)
        .sort(sort)
        .skip(skip)
        .limit(limit);

    const result = await cursor.toArray();
    return result;
};

const countPosts = async (search: string) => {
    const find = search.length === 0 ? {} : { $text: { $search: search } };
    const result = await db.collection("posts").find(find).count();
    return result;
};

// FOR POPULATE SCRIPT - START
const addManyPosts = async (values: object[]) => {
    const { insertedCount } = await db.collection("posts").insertMany(values);
    return insertedCount;
};

const createTitleAndDescriptionTextIndex = async () => {
    await db.collection("posts").createIndex({ title: "text", description: "text" });
};
// FOR POPULATE SCRIPT - END

const database = {
    searchPostsList,
    countPosts,
    addManyPosts,
    createTitleAndDescriptionTextIndex,
};

export default database;
