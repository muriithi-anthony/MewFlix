import ScrapperConfig from "../../utils/config/ScrapperConfig.js";
import Scrapper from "../../utils/Scrapper.js";

const MovieHomepage = async (req, res) => {
  let url = process.env.MOVIES_SITE;
  const MovieHome = ScrapperConfig.movieHomepage;
  const MovieHomeNext = ScrapperConfig.nextMoviePage;
  const page = parseInt(req.query.p) || 1;
  try {
    if (page === 1) {
      const data = await Scrapper({ url, config: MovieHome });
      res.json({ data: { data } });
    } else {
      url += `?p=${page}`;
      const data = await Scrapper({ url, config: MovieHomeNext });
      res.json({ data: { data } });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

export default MovieHomepage;
