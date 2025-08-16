import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

const GetActualLink = async (url) => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    let videoUrl = null;
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 10000,
    });

    const results = await page.content();

    const $ = cheerio.load(results);

    console.log($.html());
  } catch (error) {}
};

export default GetActualLink;
