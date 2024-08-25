import puppeteer from "puppeteer";
import { runServer, stopServer } from "./e2e.server";

describe("Page start", () => {
  let browser;
  let page;
  let server;

  beforeEach(async () => {
    await runServer();
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 50,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("start", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector("body");
  });

  afterEach(async () => {
    await browser.close();
    await stopServer();
  });
});
