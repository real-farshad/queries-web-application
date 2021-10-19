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

const clearCollections = async (): Promise<void> => {
    // get a list of all collection in the database
    const result = await db.command({
        listCollections: 1.0,
        authorizedCollections: true,
        nameOnly: true,
    });

    // loop through every collection and remove all documents in it
    const collections = result.cursor.firstBatch;
    for (const collection of collections) {
        await db.collection(collection.name).deleteMany({});
    }
};

export { db, connectToDb, disconnectFromDb, clearCollections };
