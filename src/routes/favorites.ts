import express from "express";
import database from "../services/favorites";
import validateObjectId from "../middlewares/validateObjectId";

import {
  getFavoritesList,
  getFavoriteById,
  createFavorite,
  updateFavoriteById,
  deleteFavoriteById,
} from "../controllers/favorites";

const router = express.Router();

router.get("/", (req, res, next): any => {
  return getFavoritesList({ database, req, res, next });
});

// router.get("/:id", validateObjectId, (req, res, next) => {
//     return getFavoriteById({ database, req, res, next });
// });

// router.post("/", (req, res, next) => {
//     return createFavorite({ database, req, res, next });
// });

// router.put("/:id", validateObjectId, (req, res, next) => {
//     return updateFavoriteById({ database, req, res, next });
// });

// router.delete("/:id", validateObjectId, (req, res, next) => {
//     return deleteFavoriteById({ database, req, res, next });
// });

export default router;
