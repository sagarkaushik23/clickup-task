// Execution time = 5.50
import puppeteer from "puppeteer";
import selectors from "../selectors.js"; 
import solveCaptcha from "./captcha.js";

const loginpage = async () => {
    const browser = await puppeteer.launch({
        headless: true,        
        args: ["--no-sandbox", "--disable-setuid-sandbox"], 
    });
    const [page] = await browser.pages();

    try {
        page.setDefaultTimeout(20_0000); 

        
        await page.goto("https://nysa.icicilombard.com/#/login", { waitUntil: "domcontentloaded" });

        // await page.type(selectors.username, "IM-806194", { delay: 40 });
        await page.type(selectors.username, "IM-806194");
        console.log("The username has been entered");

        // await page.type(selectors.password, "vigjirgp", { delay: 40 });
        await page.type(selectors.password, "vigjirgp");

        console.log("Password has been entered");

        // Extract CAPTCHA as Base64 from the canvas element
        // await new Promise((res) => setTimeout(res, 1000));

        const captchaBase64 = await page.evaluate((selector) => {
            const canvas = document.querySelector(selector);
            if (!canvas) throw new Error("Canvas element not found!");
            return canvas.toDataURL("image/png").replace(/^data:image\/png;base64,/, "");
        }, selectors.captcha_image);

        console.log("Captcha extracted as Base64.");

        // Solve the CAPTCHA
        const detectedText = await solveCaptcha(captchaBase64);

        if (!detectedText) throw new Error("CAPTCHA could not be solved!");

        console.log("CAPTCHA solution detected:", detectedText);

        
        await Promise.all([
            page.type(selectors.captcha, detectedText, { delay: 100 }),
            
        ]);

        console.log("captcha_solved");

        
        await page.waitForSelector(selectors.login,{visible:true})
        await page.click(selectors.login);
        console.log("Login successful.");
        await new Promise((res) => setTimeout(res, 20000));
        
        return page;
    } catch (error) {
        console.error("Error during login:", error.message);
    } 
    
};

export default loginpage;






