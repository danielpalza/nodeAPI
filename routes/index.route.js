import { Router } from "express";
import authRoutes from "./authRoutes.js"

const router = Router()

router.use("/sessions", authRoutes)


export default router; 