import puppeteer from "puppeteer";
import { runServer, stopServer } from "./e2e.server";

describe("Inn Form", () => {
  let browser;
  let page;

  beforeEach(async () => {
    await runServer();
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("Form should render on page start", async () => {
    await page.goto("http://localhost:8081");

    await page.waitForSelector(".input-card-widget");
  });

  test("Form input should add .icon-discover class for the card code", async () => {
    await page.goto("http://localhost:8081");

    await page.waitForSelector(".input-card-widget");

    const form = await page.$(".input-card-widget");
    const input = await form.$(".card-number-input");
    await input.type("6011243478259906");
    await page.waitForSelector(".input-card-widget .icon-discover");
  }, 20000);

  test("Form input should add .valid class for the card code", async () => {
    await page.goto("http://localhost:8081");

    await page.waitForSelector(".input-card-widget");

    const form = await page.$(".input-card-widget");
    const input = await form.$(".card-number-input");
    const submit = await form.$(".button");

    await input.type("6011243478259906");
    await submit.click();
    await page.waitForSelector(".input-card-widget .card-number-input.valid");
  }, 20000);

  test("Form input should add .invalid class for the card code", async () => {
    await page.goto("http://localhost:8081");

    await page.waitForSelector(".input-card-widget");

    const form = await page.$(".input-card-widget");
    const input = await form.$(".card-number-input");
    const submit = await form.$(".button");

    await input.type("2222 2222 2222 2222 222");
    await submit.click();
    await page.waitForSelector(".input-card-widget .card-number-input.invalid");
  }, 20000);

  afterEach(async () => {
    await browser.close();
    await stopServer();
  });
});
