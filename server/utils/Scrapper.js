import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import dotenv from "dotenv";

const Scrapper = async ({ url = "home/", config } = {}) => {
  dotenv.config();

  const baseUrl = process.env.SCRAPPED;
  //SCRAPPED=https://anitaku.io/ in env file
  const fullUrl = `${baseUrl}${url}`;

  const scrape = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(fullUrl, {
      waitUntil: "networkidle2", // wait for all network requests to settle
    });

    // Get page content
    const html = await page.content();

    const $ = cheerio.load(html);

    await browser.close();

    return config($);
  };

  const results = await scrape();

  return results;
};

export default Scrapper;
