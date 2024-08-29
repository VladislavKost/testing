import puppeteer from "puppeteer";
import { fork } from "child_process";

describe("Page start", () => {
  let browser;
  let page;
  let server;

  beforeEach(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });
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
  });
});
