import Scrapper from "../../utils/Scrapper.js";

const Home = (req, res) => {
  const homeData = Scrapper("series/?order=popular", ConfigMap);
  res.status(200).json("Hello from home");
};

export default Home;
