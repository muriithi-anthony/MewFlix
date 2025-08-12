import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AnimeHomepageRoutes from "./Routes/AnimeHomepageRoutes.js";
import MovieHomepages from "./Routes/MovieHomepages.js";
import SeriesHomepages from "./Routes/SeriesHomepages.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

//Routes
app.use("/movies", MovieHomepages);
app.use("/series", SeriesHomepages);
app.use("/", AnimeHomepageRoutes);

app.listen(PORT, () => console.log("Server listening on PORT: ", PORT));
