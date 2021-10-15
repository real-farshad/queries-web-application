import express from "express";
import favorites from "./favorites";
import posts from "./posts";

const router = express.Router();

router.use("/favorites", favorites);
router.use("/posts", posts);

export default router;
