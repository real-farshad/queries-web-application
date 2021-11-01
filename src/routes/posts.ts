import express from "express";
import { getPostsList, getPostsCount } from "../controllers/posts";

const router = express.Router();

router.get("/", getPostsList);
router.get("/count", getPostsCount);

export default router;
