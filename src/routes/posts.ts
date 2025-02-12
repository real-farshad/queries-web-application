import express from "express";
import database from "../services/posts";
import { getPostsList, getPostsCount } from "../controllers/posts";

const router = express.Router();

router.get("/", (req, res, next): any => {
  return getPostsList({ database, req, res, next });
});

router.get("/count", (req, res, next) => {
  return getPostsCount({ database, req, res, next });
});

export default router;
