import { Router } from "express";
import Movies from "../controllers/MoviesController.js";

const router = Router();
router.get("/", Movies);
export default router;
