import { MongoClient, Db } from "mongodb";

let database: Db;

// type definition
type connectToDbType = (uri: string, dbName: string) => void;

const connectToDb: connectToDbType = async (uri, dbName) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        database = client.db(dbName);
    } catch (err) {
        throw new Error("unable to connect to mongodb!");
    }
};

export { connectToDb, database };
