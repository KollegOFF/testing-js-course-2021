const puppeteer = require('puppeteer');

test('Error on existing user', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8080/#/register');
  await page.type('#username', 'Evgeniy');
  await page.type('#email', 'test@test.ru');
  await page.type('#password', 'qwertyyui');
  await page.click('#register-button');

  await page.waitForTimeout(3000);
  //await page.screenshot({ path: './tests/example.png' });
  const errorHandle = await page.$('ul.error-messages');

  expect(await errorHandle.$eval('li', node => node.innerText)).toBe('username has already been taken');

  await browser.close();
});