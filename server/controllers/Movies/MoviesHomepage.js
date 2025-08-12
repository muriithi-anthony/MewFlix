import { MovieHomepageScrapper } from "../../utils/config/ScrapperConfig.js";
import Scrapper from "../../utils/Scrapper.js";

const MovieHomepage = async (req, res) => {
  const url = process.env.MOVIES_SITE;
  const data = await Scrapper({ url, MovieHomepageScrapper });
  res.json({ data: { data } });
};

export default MovieHomepage;
