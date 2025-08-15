import { Router } from "express";
import MovieHome from "../controllers/Movies/MoviesHome.js";
import MovieDetails from "../controllers/Movies/MovieDetails.js";

const router = Router();
router.get("/", MovieHome);
router.get("/:id", MovieDetails);
router.get("/popular", MovieHome);
router.get("/genre", MovieHome); //within it action and such all fetched
router.get("/year", MovieHome); //within it action and such all fetched

export default router;
