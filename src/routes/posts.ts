import express from "express";
import { getPostsList } from "../controllers/posts";

const router = express.Router();

router.get("/", getPostsList);

export default router;
