const click_evaluate = async (page, selector) => {
    

    await page.waitForSelector(selector, { visible: true });
    await page.evaluate((selector) => document.querySelector(selector).click(), selector);
    console.log("Button clicked successfully");
   
};

export default  click_evaluate;