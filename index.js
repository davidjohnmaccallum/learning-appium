const remote = require("webdriverio");

// javascript
const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    platformName: "Android",
    "appium:deviceName": "RZ8N21RC4EL",
    "appium:automationName": "UIAutomator2",
    browserName: "Chrome",
  },
};

async function main() {
  const browser = await remote.remote(opts);

  try {
    await browser.url("https://sermon-publish.herokuapp.com/");
    const ministryLink = await browser.$("#ministry-0");
    await ministryLink.click();
    const sermonLink = await browser.$("#sermon-0");
    await sermonLink.click();
    const playButton = await browser.$("#playButton");
    await playButton.click();
    const pauseButton = await browser.$("#pauseButton");
    await pauseButton.waitForExist();
  } finally {
    await browser.deleteSession();
  }
}

main().catch(console.log);
