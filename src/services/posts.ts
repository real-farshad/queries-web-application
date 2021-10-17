import { ObjectId } from "mongodb";
import { db } from "../config/mongodb";

const getPostsList = async () => {
    const cursor = await db.collection("posts").find().limit(4);
    const result = await cursor.toArray();
    return result;
};

const findPostById = async (id: string) => {
    const result = await db.collection("posts").findOne({ _id: new ObjectId(id) });

    return result;
};

const createPost = async (value: object) => {
    const { insertedId } = await db.collection("posts").insertOne(value);
    return insertedId;
};

const updatePostById = async (id: string, value: object) => {
    const { matchedCount, modifiedCount } = await db
        .collection("posts")
        .updateOne({ _id: new ObjectId(id) }, { $set: value });

    return [matchedCount, modifiedCount];
};

const deletePostById = async (id: string) => {
    const { deletedCount } = await db
        .collection("posts")
        .deleteOne({ _id: new ObjectId(id) });
    return deletedCount;
};

const database = {
    getPostsList,
    findPostById,
    createPost,
    updatePostById,
    deletePostById,
};

export default database;
