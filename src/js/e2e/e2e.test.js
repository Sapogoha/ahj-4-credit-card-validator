import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('Validator', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 150,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('should show type of bank card', async () => {
    await page.goto(baseUrl);
    const cardValidator = await page.$('.validation-form__input');
    await cardValidator.type('345662404096571');
    const submitButton = await page.$('.submit-button');
    await submitButton.click();
    await page.waitForSelector('.known-type');
  });

  test('should show valid bank card with unknown type', async () => {
    await page.goto(baseUrl);
    const cardValidator = await page.$('.validation-form__input');
    await cardValidator.type('6011419723758376795');
    const submitButton = await page.$('.submit-button');
    await submitButton.click();
    await page.waitForSelector('.unknown-type');
  });

  test('should show that the number is not bank card number', async () => {
    await page.goto(baseUrl);
    const cardValidator = await page.$('.validation-form__input');
    await cardValidator.type('123456');
    const submitButton = await page.$('.submit-button');
    await submitButton.click();
    await page.waitForSelector('.error');
  });
});
