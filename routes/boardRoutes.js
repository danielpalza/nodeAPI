import { Router } from "express";
import { create, read, update, deleteBoard} from "../controllers/boardController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router()

router.post("/delete", verifyToken, deleteBoard);
router.post("/create", verifyToken, create);
router.post("/update", verifyToken, update);
router.post("/read", verifyToken, read);

export default router;