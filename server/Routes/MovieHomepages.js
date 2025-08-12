import { Router } from "express";
import MovieHomepage from "../controllers/Movies/MoviesHomepage.js";

const router = Router();
router.get("/", MovieHomepage);
router.get("/:id", MovieHomepage);
router.get("/popular", MovieHomepage);
router.get("/genre", MovieHomepage); //within it action and such all fetched
router.get("/year", MovieHomepage); //within it action and such all fetched

export default router;
