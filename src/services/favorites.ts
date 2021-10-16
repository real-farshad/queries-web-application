import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

const findFirstSixFavorites = async () => {
    const cursor = await database.collection("favorites").find().limit(10);
    const result = await cursor.toArray();
    return result;
};

const findSingleFavoriteById = async (id: string) => {
    const result = await database
        .collection("favorites")
        .findOne({ _id: new ObjectId(id) });

    return result;
};

const addNewFavorite = async (value: any) => {
    const { insertedId } = await database
        .collection("favorites")
        .insertOne(value);
    return insertedId;
};

const updateSingleFavorite = async (id: string, value: any) => {
    const { matchedCount, modifiedCount } = await database
        .collection("favorites")
        .updateOne({ _id: new ObjectId(id) }, { $set: value });

    return [matchedCount, modifiedCount];
};

const deleteSingleFavorite = async (id: string) => {
    const { deletedCount } = await database
        .collection("favorites")
        .deleteOne({ _id: new ObjectId(id) });
    return deletedCount;
};

const db = {
    findFirstSixFavorites,
    findSingleFavoriteById,
    addNewFavorite,
    updateSingleFavorite,
    deleteSingleFavorite,
};

export default db;
