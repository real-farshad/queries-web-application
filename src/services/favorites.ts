import { ObjectId } from "mongodb";
import { db } from "../config/mongodb";

const getFavoritesList = async () => {
    const cursor = await db.collection("favorites").find().limit(6);
    const result = await cursor.toArray();
    return result;
};

const findFavoriteById = async (id: string) => {
    const result = await db.collection("favorites").findOne({ _id: new ObjectId(id) });

    return result;
};

const addFavorite = async (value: object) => {
    const { insertedId } = await db.collection("favorites").insertOne(value);
    return insertedId;
};

const addManyFavorites = async (values: object[]) => {
    const { insertedCount } = await db.collection("favorites").insertMany(values);
    return insertedCount;
};

const updateFavoriteById = async (id: string, value: object) => {
    const { matchedCount, modifiedCount } = await db
        .collection("favorites")
        .updateOne({ _id: new ObjectId(id) }, { $set: value });

    return [matchedCount, modifiedCount];
};

const deleteFavoriteById = async (id: string) => {
    const { deletedCount } = await db
        .collection("favorites")
        .deleteOne({ _id: new ObjectId(id) });
    return deletedCount;
};

const database = {
    getFavoritesList,
    findFavoriteById,
    addFavorite,
    addManyFavorites,
    updateFavoriteById,
    deleteFavoriteById,
};

export default database;
