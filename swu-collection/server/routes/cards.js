import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import { createCard, getAllCards, getCardById, updateCardById, deleteCardById} from "../controllers/cardController.js";

const router = express.Router();

router.post("/", createCard);

router.get("/", getAllCards);

router.get("/:id", getCardById);

router.patch("/:id", updateCardById);

router.delete("/:id", deleteCardById);

export default router;