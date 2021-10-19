import dotenv from "dotenv";
import { connectToDb, disconnectFromDb } from "../config/mongodb";
import favoritesSchema from "../schemas/favorites";
import postsSchema from "../schemas/posts";
import favoritesDb from "../services/favorites";
import postsDb from "../services/posts";

// Mock data
import favorites from "./mockFavorites";
import posts from "./mockPosts";

dotenv.config();
const uri = process.env.MONGODB_URI as string;
const dbName = process.env.DB_NAME as string;

const populateDb = async (): Promise<void> => {
    const validFavorites: object[] = [];

    // validate favorites array
    for (const favorite of favorites) {
        const validation = favoritesSchema.validate(favorite);
        if (validation.error) return console.log("invalid favorite!");
        validFavorites.push(validation.value);
    }

    const validPosts: object[] = [];

    // validate posts array
    for (const post of posts) {
        const validation = postsSchema.validate(post);
        if (validation.error) return console.log("invalid post!");
        validPosts.push(validation.value);
    }

    try {
        // connect to the db
        await connectToDb(uri, dbName);

        // add favorites to the db
        const insertedFavoritesCount = await favoritesDb.addManyFavorites(validFavorites);
        console.log(
            `${insertedFavoritesCount} documents were inserted to favorites collection.`
        );

        // add posts to the db
        const insertedPostsCount = await postsDb.addManyPosts(validPosts);
        console.log(`${insertedPostsCount} documents were inserted to posts collection.`);

        // disconnect from the db
        await disconnectFromDb();

        console.log("database populated successfully.");
    } catch (err) {
        throw new Error("unable to populate mongodb!");
    }
};

populateDb();
