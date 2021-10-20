import { db } from "../config/mongodb";

type searchPostsList = (
    search: string,
    sort: string,
    skip: number,
    limit: number
) => Promise<object[]>;

const searchPostsList: searchPostsList = async (search, sort, skip, limit) => {
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
    addManyPosts,
    createTitleAndDescriptionTextIndex,
};

export default database;
