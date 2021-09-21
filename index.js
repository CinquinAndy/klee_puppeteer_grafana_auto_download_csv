require('dotenv').config();
const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch(
        {
            // passer cette valeur à true plus tard
            headless:false
        }
    );

    const page = await browser.newPage();
    await page.goto('http://192.168.145.131:3000/');
    // todo -> passer les éléments en .env
    await page.type('input[name="user"]', "AndyCinquin")
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();
