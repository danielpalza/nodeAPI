import { Router } from "express";
import authRoutes from "./authRoutes.js"
import boardRoutes from "./boardRoutes.js"

const router = Router()

router.use("/sessions", authRoutes)
router.use("/login", authRoutes)
router.use("/boards", boardRoutes)


export default router; 