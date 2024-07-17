import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { create, deleteCard, read, update } from "../controllers/cardController.js";

const router = Router()

router.post("/delete", verifyToken, deleteCard);
router.post("/create", verifyToken, create);
router.post("/update", verifyToken, update);
router.post("/read", verifyToken, read);

export default router;