import { MongoClient, Db } from "mongodb";

let client: MongoClient;
let db: Db;

const connectToDb = async (uri: string, dbName: string): Promise<void> => {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);

    console.log("Connected to mongodb...");
};

const disconnectFromDb = async (): Promise<void> => {
    await client.close();

    console.log("Disconnected from mongodb...");
};

export { db, connectToDb, disconnectFromDb };
