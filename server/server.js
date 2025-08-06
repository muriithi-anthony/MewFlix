import express from "express";
import dotenv from "dotenv";
import HomepageRoutes from "./Routes/HomepageRoutes.js";
import MovieHomepages from "./Routes/MovieHomepages.js";
import SeriesHomepages from "./Routes/SeriesHomepages.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

//Routes
app.use("/", HomepageRoutes);
app.use("/movies", MovieHomepages);
app.use("/series", SeriesHomepages);

app.listen(PORT, () => console.log("Server listening on PORT: ", PORT));
