import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { create, deleteCard, read, update } from "../controllers/cardController.js";

const router = Router()

router.post("/delete", deleteCard);
router.post("/create", create);
router.post("/update", update);
router.post("/read", read);

export default router;