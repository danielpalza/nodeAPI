import { Router } from "express";
import { create } from "../controllers/authController.js";
import accountExists from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";


const router = Router()


router.post("/", accountExists, createHash, create);
export default router;