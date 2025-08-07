import { Router } from "express";
import Home from "../controllers/Anime/Home.js";
import Trending from "../controllers/Anime/Trending.js";
import NewReleases from "../controllers/Anime/NewReleases.js";
import Upcoming from "../controllers/Anime/Upcoming.js";
import Settings from "../controllers/Anime/Settings.js";
import PostSetting from "../controllers/Anime/PostSetting.js";
import Anime from "../controllers/Anime/Anime.js";

const router = Router();

router.get("/", Home);
router.get("/:id", Anime);
router.get("/trending", Trending);
router.get("/newReleases", NewReleases);
router.get("/upcoming", Upcoming);
router.get("/settings", Settings);
router.post("/setting", PostSetting);

export default router;
