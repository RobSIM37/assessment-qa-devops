
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw 5 draws 5 bots', async () => {

    const drawFive = await driver.findElement(By.id('draw'))
    drawFive.click();
    
    await driver.sleep(2000);

    const teamBotCards = await driver.findElements(By.className('bot-card'));

    await driver.sleep(2000);
    const botCardsArr = Array.from(teamBotCards);

    expect(botCardsArr.length).toBe(5);

})

test('clicking add to Duo makes Your Duo appear', async () => {

    const drawFive = await driver.findElement(By.id('draw'))
    drawFive.click();
    
    await driver.sleep(2000);

    const teamBotButton = await driver.findElement(By.className('bot-btn'));

    await driver.sleep(2000);
    teamBotButton.click();

    await driver.sleep(2000);

    const yourDuoHeader = await driver.findElement(By.id('your-duo-header'))
    await driver.sleep(2000);

    const yourDuoHeaderIsDisplayed = yourDuoHeader.isDisplayed();
    await driver.sleep(2000);

    expect(Boolean(yourDuoHeaderIsDisplayed)).toBe(true);

})