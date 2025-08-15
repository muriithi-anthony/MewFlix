import ScrapperConfig from "../../utils/config/ScrapperConfig.js";
import Scrapper from "../../utils/Scrapper.js";

const MovieDetails = async (req, res) => {
  const { id } = req.params;
  const config = ScrapperConfig.MovieDetails;
  const url = `${process.env.MOVIES_BASE_URL}/${id}`;
  const waitForSelectors = ["#vidcon iframe"];

  try {
    const data = await Scrapper({
      url,
      config,
      waitForSelectors,
    });
    res.status(200).json({ details: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default MovieDetails;
