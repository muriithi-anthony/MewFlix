import { Router } from "express";
import Series from "../controllers/SeriesController.js";

const router = Router();

router.get("/", Series);

export default router;
