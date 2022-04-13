const { Builder, By, Key, until } = require('selenium-webdriver')
const utils = require('./utils')

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
// const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.us-west-1.saucelabs.com:443/wd/hub`;
// NOTE: Use the URL below if using our EU datacenter (e.g. logged in to app.eu-central-1.saucelabs.com)
const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;


/* Tackle these two bonuses as you see fit!
The primary goal is just to see your thought process and 
discuss it in the post-tech test interview.
*/

describe('Bonus', function () {
    it('odd even', async function () {
        // If its odd, fail the test. 
        // If it is even pass the test
        // this test works in eu-central-1 or us-west-1, 
        // ignore the popup in eu-central-1

        //let driver = await new Builder()
        //   .withCapabilities(utils.oddEvenCaps)
        //   .usingServer(ONDEMAND_URL)
        //  .build();

        // lunch  browser 
        let driver = await new Builder().forBrowser("firefox").build();

        await driver.get("https://www.google.com/search?q=random+number");
        let rand_num = await driver.findElement(By.className('gws-csf-randomnumber__result')).getText();
        console.log(rand_num);
        await driver.executeScript(`sauce:context=the number is ${rand_num}`);
        // Now set the test to Passing or Failing 
        // If its odd, fail the test. 
        // If it is even pass the test

        await driver.executeScript()

        await driver.quit();
    });


    it('exception handling', async function () {
        /* Handle any exceptions that occur with a meaningful 
        message & the original error. Feel free to handle the 
        error & change the code however you like, but do not fix 
        the underlying problem the test should continue to fail.

        Currently the test is abandoned after an error and idles out. 
        We want it to gracefully stop and to mark it as a failure in 
        the saucelabs.com UI.
        */
        // let driver = await new Builder()
        //   .withCapabilities(utils.exceptionCaps)
        // .usingServer(ONDEMAND_URL)
        //  .build();

        // lunch  browser 
        let driver = await new Builder().forBrowser("firefox").build();


        // One of these elements is NOT present or reachable
        // mark the test as a failure and output the original error
        // JavaScript HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
        await driver.get("https://webglsamples.org/blob/blob.html");
        await driver.findElement(By.id('setSetting3')).click();
        await driver.findElement(By.id('setSetting8')).click();
        await driver.findElement(By.id('setSetting1000')).click();
        await driver.findElement(By.id('setSetting2')).click();
        await driver.findElement(By.id('setSetting8')).click();
        await driver.quit();
    });
});