import { Router } from "express";
import authRoutes from "./authRoutes.js"
import boardRoutes from "./boardRoutes.js"

const router = Router()

router.use("/sessions", authRoutes)
router.use("/login", authRoutes)
router.use("/boards", boardRoutes)
router.use("/cards", boardRoutes)
router.use("/lists", boardRoutes)


export default router; 