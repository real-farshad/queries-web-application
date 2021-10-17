import express from "express";
import validateObjectId from "../middlewares/validateObjectId";
import {
    getPostsList,
    getPostById,
    createPost,
    updatePostById,
    deletePostById,
} from "../controllers/posts";

const router = express.Router();

router.get("/", getPostsList);
router.get("/:id", validateObjectId, getPostById);
router.post("/", createPost);
router.put("/:id", validateObjectId, updatePostById);
router.delete("/:id", validateObjectId, deletePostById);

export default router;
