import { Router } from "express";
import Movies from "../controllers/MoviesController.js";

const router = Router();
router.get("/", Movies);
router.get("/:id", Movies);
router.get("/popular", Movies);
router.get("/genre", Movies); //within it action and such all fetched
router.get("/year", Movies); //within it action and such all fetched

export default router;
