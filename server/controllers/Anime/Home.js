import Scrapper from "../../utils/Scrapper.js";
import ScrapperConfig from "../../utils/config/ScrapperConfig.js";

//"/" endpoint, scrap popular
const Home = async (req, res) => {
  try {
    const config = ScrapperConfig.home;
    const homeData = await Scrapper({ url: "series/?order=popular", config });
    res.status(200).send(homeData);
  } catch (err) {
    console.error("Scraping failed:", err.message);
    res.status(500).json({ error: "Failed to fetch." });
  }
};

export default Home;
