import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

const Scrapper = async ({ url, config, waitForSelectors = [] } = {}) => {
  const scrape = async () => {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      await page.goto(url, {
        waitUntil: "networkidle2", // wait for all network requests to settle
      });

      // Get page content
      for (const selector of waitForSelectors) {
        console.log(`Waiting for selector: ${selector}`);
        await page.waitForSelector(selector, { timeout: 15000 }); // Wait up to 10 seconds for the selector
      }
      const html = await page.content();

      const $ = cheerio.load(html);

      await browser.close();
      return await config($);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };

  const results = await scrape();

  return results;
};

export default Scrapper;
