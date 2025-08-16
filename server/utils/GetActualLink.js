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

    // Intercept responses
    page.on("response", async (response) => {
      const url = response.url();
      if (url.includes(".m3u8") || url.includes(".mp4")) {
        videoUrl = url;
      }
    });

    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 20000,
    });

    // ===== 1. Try clicking play button =====
    try {
      await page.waitForSelector('.play-button, [onclick*="video"]', {
        visible: true,
        timeout: 5000,
      });
      await page.click('.play-button, [onclick*="video"]');
    } catch (e) {
      console.log("Play button not found, trying form submission...");
    }

    // ===== 2. Fallback: Submit form =====
    await page.evaluate(() => {
      const form = document.querySelector('form[id^="jgb"]');
      if (form) form.submit();
    });

    // ===== 3. Manual delay (replace waitForTimeout) =====
    await new Promise((resolve) => setTimeout(resolve, 5000)); // 5s delay

    // ===== 4. Final check for video URL =====
    if (!videoUrl) {
      videoUrl = await page.evaluate(() => {
        const iframe = document.querySelector("iframe");
        return iframe ? iframe.src : null;
      });
    }

    await browser.close();
    return videoUrl;
  } catch (error) {
    console.error("Error:", error);
    if (browser) await browser.close();
    return null;
  }
};

export default GetActualLink;
