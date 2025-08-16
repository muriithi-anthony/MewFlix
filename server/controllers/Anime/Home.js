import Scrapper from "../../utils/Scrapper.js";
import ScrapperConfig from "../../utils/config/ScrapperConfig.js";

//"/" endpoint, scrap popular
const Home = async (req, res) => {
  const url = process.env.ANIME_SITE;
  const config = ScrapperConfig.home;
  try {
    const data = await Scrapper({ url, config });
    res.status(200).send(data);
  } catch (err) {
    console.error("Scraping failed:", err.message);
    res.status(500).json({ error: "Failed to fetch." });
  }
};

export default Home;
