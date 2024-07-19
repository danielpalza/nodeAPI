import { Router } from "express";
import authRoutes from "./authRoutes.js"
import boardRoutes from "./boardRoutes.js"
import cardRoutes from "./cardRoutes.js"
import listRoutes from "./listRoutes.js"
const router = Router()

router.use("/sessions", authRoutes)
router.use("/login", authRoutes)
router.use("/boards", boardRoutes)
router.use("/cards", cardRoutes)
router.use("/lists", listRoutes)


export default router; 