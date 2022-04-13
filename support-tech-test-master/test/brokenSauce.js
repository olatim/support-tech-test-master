const { Builder, By, Key, until } = require('selenium-webdriver')
const utils = require('./utils')
const SauceLabs = require('saucelabs').default;
const assert = require('assert');

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
// const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.us-west-1.saucelabs.com:443/wd/hub`;
// NOTE: Use the URL below if using our EU datacenter (e.g. logged in to app.eu-central-1.saucelabs.com)
const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;


/**
* Run this test before working on the problem.
* When you view the results on your dashboard, you'll see that the test "Failed".
* Your job is to figure out why the test failed and make the changes necessary to make the test pass.
*
* Bonus: Once you get the test working, update the code so that when the test runs, it 
* can reach the Sauce Labs Documentation from the Resources tab on the https://saucelabs.com page.
* Hover over the 'Resources' element and then click the 'Documentation' link, 
* but the goal is to reach the docs page.
* See the W3C Actions API https://appium.io/docs/en/commands/interactions/actions/
*/

describe('Broken Sauce', function () {
    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities(utils.brokenCapabilities)
            .usingServer(ONDEMAND_URL).build();

        await driver.get("https://www.google.com");
        // If you see a German or English GDPR modal on google.com you 
        // will have to code around that or use the us-west-1 datacenter.
        // You can investigate the modal elements using a Live Test(https://app.saucelabs.com/live/web-testing)

        // an agremeent page comes  up  
        let agreementPage = await driver.findElement(By.className("QS5gu sy4vM"));
        await agreementPage.click();

        //accepting all necessary  setting
        let searchCustomization = await driver.findElement(By.className("VfPpkd-RLmnJb"));
        await searchCustomization.click();

        //login test account

        let loginUser = await driver.findElement(By.id("identifierId"));
        //await loginUser.clear();
        await loginUser.sendKeys("oluwakinging11@gmail.com");

        let userNameNext = await driver.findElement(By.className("VfPpkd-vQzf8d"));
        await userNameNext.click();

        // The code can not be completed to reach the browser as the google authentication is blocking it.
        //"I reach this road block This browser or app may not be secure. 
        //Try using a different browser. If you're already using a supported browser, you can try again to sign in." 
        //also  the link doesn't work "https://app.saucelabs.com/live/web-testing"

        //let loginPass = await driver.findElement(By.name(""));
        //await loginPass.sendKeys("");

        // let search = await driver.findElement(By.name("q"));
        //await search.sendKeys("Sauce Labs");

        //let button = await driver.findElement(By.name("btnK"))
        // await button.click()

        // let page = await driver.findElement(By.partialLinkText("sauce"));



        // Bonus, see description above.
        // await driver.get("https://saucelabs.com");

        await driver.quit();
    });

    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities(utils.brokenCapabilities)
            .usingServer(ONDEMAND_URL).build();

        // Bonus, see description above.
        await driver.get("https://saucelabs.com");

        //Resources Page 
        let resourcePage = await driver.findElement(By.xpath("/html/body/header/div/nav/ul/li[1]/ul[2]/li[4]/div[1]/div/a"));
        await resourcePage.click();

        //DocumentPage
        let documentPage = await driver.findElement(By.xpath("/html/body/header/div/nav/ul/li[1]/ul[2]/li[4]/div[2]/div/div/div/ul/li[2]/div/ul/li/div/ul/li[1]/div/ul/li/ul/li[1]/a/span"));
        await documentPage.click();

        //Xpath  is not the best measure  to  run an automation test, but as a result  of the short  deadline to  send back the test, i has to  use XPath   



        await driver.quit();
    });
});
