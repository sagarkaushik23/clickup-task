import finalhandler from "finalhandler";
import selectors from "../selectors.js";
// import { odPremiumDetails, tpPremiumDetails } from "../constants.js";

import puppeteer from 'puppeteer';
import { Page } from "puppeteer-core";
/**
 * 
 * @param {Page} page 
 * @param {*} selector 
 * @param {*} targetUrlPart 
 * @param {*} timeout 
 * @returns 
 */
// const quote_response = async (page, selector, targetUrlPart) => {
//   try {
//     if (!page || !selector || !targetUrlPart) {
//       throw new Error("Missing required parameters: page, selector, or targetUrlPart.");
//     }

//     await page.waitForSelector(selector, { visible: true });
//     // await page.click(selector);
//     await page.evaluate((selector)=>document.querySelector(selector).click(),selector)
//     console.log("Button clicked successfully, waiting for response...");

// //     const response2 = await page.waitForResponse('https://app9.icicilombard.com/ilservices/motor/v1/proposal/twowheelercalculatepremium')
// //     console.log({ response2 })
// //     console.log('ok')
// //     console.log({ response: response2 }, 'ok')
// // return response2.json()
//     if (response2.ok()) {
//       const data = await response.json();
//       console.log('Response Data:', JSON.stringify(data, null, 2));
//       return await response2.json();
//     } else {
//       console.error('Response failed with status code:', response2.status());
//       return null;
//     }
//   } catch (error) {
//     console.log(error.stack)
//     console.error('Error in getResponse:', error.message);
//     throw error;
//   }
// };

// export default quote_response;


const quote_response = async (page, selector, targetUrlPart) => {
  try {
    if (!page || !selector || !targetUrlPart) {
      throw new Error("Missing required parameters: page, selector, or targetUrlPart.");
    }

    await page.waitForSelector(selector, { visible: true });
    await page.evaluate((selector) => document.querySelector(selector).click(), selector);
    console.log("Button clicked successfully, waiting for response...");

    const response2 = await page.waitForResponse((response) => 
      response.url().includes(targetUrlPart) && response.status() === 200
    );

    console.log("Response received. Processing data...");

    const data = await response2.json();
    
    // console.log("Response Data:", JSON.stringify(data, null, 2));

    return data;
  } catch (error) {
    console.error("Error in quote_response:", error.message);
    console.error(error.stack);
    throw error;
  }
};

export default quote_response;





