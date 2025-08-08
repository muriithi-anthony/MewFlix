import Scrapper from "../../utils/Scrapper.js";
import MapConfig from "../../utils/config/MapConfig.js";

//"/" endpoint, scrap popular
const Home = async (req, res) => {
  try {
    const config = MapConfig.home;
    const homeData = await Scrapper({ url: "series/?order=popular", config });
    res.status(200).send(homeData);
  } catch (err) {
    console.error("Scraping failed:", err.message);
    res.status(500).json({ error: "Failed to fetch." });
  }
};

export default Home;
