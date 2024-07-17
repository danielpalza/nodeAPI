import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { create, deleteList, read, update } from "../controllers/listController.js";

const router = Router()

router.post("/delete", verifyToken, deleteList);
router.post("/create", verifyToken, create);
router.post("/update", verifyToken, update);
router.post("/read", verifyToken, read);

export default router;