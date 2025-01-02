//time = 7.58
// import puppeteer from "puppeteer";
// import axios from "axios";
// import selectors from "./icici/libraries/selectors.js";
// import fs from "fs"; 

// // solve captcha 
// async function solveCaptcha(base64Image) {
//     try {
//         const response = await axios.post(
//             "https://dgl002vjyl.execute-api.ap-south-1.amazonaws.com/dev/captchaSolver",
//             {
//                 base64Image: base64Image,
//                 brightness: 1,
//                 contrast: 1,
//                 sharpness: 1,
//             },
//             {
//                 headers: {
//                     "Content-Type": "application/json11",
//                 },
//             }
//         );
//         return response.data;
//     } catch (error) {
//         console.error("Error solving captcha:", error.message);
//         return null;
//     }
// }

// const loginpage = async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const [page] = await browser.pages();

//     page.setDefaultTimeout(30_000)


//     // Navigate to the login page
//     await page.goto("https://nysa.icicilombard.com/#/login", { waitUntil: "networkidle0" });

//     // Enter username and password
//     await page.type(selectors.username, "IM-806194", { delay: 100 });
//     console.log("The username has been entered");

//     await page.type(selectors.password, "vigjirgp", { delay: 100 });
//     console.log("Password has been entered");

//     // Extract captcha as Base64 from the canvas element
//     const captchaBase64 = await page.evaluate((selector) => {
//         const canvas = document.querySelector(selector);
//         if (!canvas) {
//             throw new Error("Canvas element not found! Check the selector.");
//         }
//         return canvas.toDataURL("image/png").replace(/^data:image\/png;base64,/, "");
//     }, selectors.captcha_image);

//     console.log("Captcha extracted as Base64");

//     // Save the captcha as an image for debugging
//     fs.writeFileSync("captcha.png", captchaBase64, { encoding: "base64" });
//     console.log("Captcha saved as captcha.png");

//     // Solve the captcha using the API
//     const captchaSolution = await solveCaptcha(captchaBase64);

//     if (!captchaSolution || !captchaSolution.detected_text) {
//         throw new Error("Failed to solve captcha or detected text is missing!");
//     }

//     const detectedText = captchaSolution.detected_text;
//     console.log("Captcha solution:", captchaSolution);

//     // Type the captcha text into the input field
//     await page.type(selectors.captcha, detectedText, { delay: 100 });
//     console.log("Captcha typed successfully");

//     // Click the login button
//     await page.click(selectors.login);
//     console.log("Login button has been clicked");

    
//     // await new Promise((res) => setTimeout(res, 20000));

//     // await browser.close();
//     return page;
// };



// export default loginpage;