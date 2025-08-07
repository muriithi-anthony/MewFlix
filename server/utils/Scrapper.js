import axios from "axios";
import * as cheerio from "cheerio";

const Scrapper = async (url ="", config) => {
  const baseUrl = "https://anitaku.io/";
  const fullUrl = `${baseUrl}${url}`;

  const results = [];

  const { data } = await axios.get(fullUrl);
  const $ = cheerio.load(data);

  

  return results;
};

export default Scrapper;
