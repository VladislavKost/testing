import puppeteer from "puppeteer";

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 50,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("start", async () => {
    await page.goto("http://localhost:8081");

    await page.waitForSelector("body");
  });

  afterEach(async () => {
    await browser.close();
  });
});
