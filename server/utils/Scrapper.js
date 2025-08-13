import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

const Scrapper = async ({ url, config } = {}) => {
  const scrape = async () => {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      await page.goto(url, {
        waitUntil: "networkidle2", // wait for all network requests to settle
      });

      // Get page content
      const html = await page.content();

      const $ = cheerio.load(html);

      await browser.close();
      return config($);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };

  const results = await scrape();

  return results;
};

export default Scrapper;
