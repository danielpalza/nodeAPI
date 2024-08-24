import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { create, deleteList, read, update } from "../controllers/listController.js";

const router = Router()

router.post("/delete", deleteList);
router.post("/create", create);
router.post("/update", update);
router.post("/read", read);

export default router;