import { Router } from "express";
import MovieHome from "../controllers/Movies/MoviesHome.js";

const router = Router();
router.get("/", MovieHome);
router.get("/:id", MovieHome);
router.get("/popular", MovieHome);
router.get("/genre", MovieHome); //within it action and such all fetched
router.get("/year", MovieHome); //within it action and such all fetched

export default router;
