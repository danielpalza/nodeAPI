import { Router } from "express";
import { create, login} from "../controllers/authController.js";
import accountExists from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import userExists from "../middlewares/userExist.js";
import verifyHash from "../middlewares/verifyHash.js";
import createToken from "../middlewares/createToken.js"


const router = Router()

router.post("/register", accountExists, createHash, create);
router.post("/login", userExists, verifyHash, createToken, login);
export default router;