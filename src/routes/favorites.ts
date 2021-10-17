import express from "express";
import validateObjectId from "../middlewares/validateObjectId";
import {
    getFavoritesList,
    getFavoriteById,
    createFavorite,
    updateFavoriteById,
    deleteFavoriteById,
} from "../controllers/favorites";

const router = express.Router();

router.get("/", getFavoritesList);
router.get("/:id", validateObjectId, getFavoriteById);
router.post("/", createFavorite);
router.put("/:id", validateObjectId, updateFavoriteById);
router.delete("/:id", validateObjectId, deleteFavoriteById);

export default router;
