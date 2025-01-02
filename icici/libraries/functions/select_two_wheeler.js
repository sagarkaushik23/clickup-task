import { Page } from "puppeteer-core";
import selectors from "../selectors.js";
// import loginpage from "./login.js";
// import puppeteer from "puppe/teer";

const select_two_wheeler = async (page) => {
    await page.waitForNetworkIdle({idleTime:100})
    try {

        try {
            await page.waitForSelector(selectors.motor,{visible:true});
            console.log("Motor button found");  
            await page.click(selectors.motor);
                      
        } catch (error) {
            console.error("failed to click motor : " ,error)            
        };

        try {
            await page.waitForSelector(selectors.dealnotfound,{ waitUntil: 'networkide0'});
            console.log("deal found");
            await page.click(selectors.dealnotfound);
            
            
        } catch (error) {
            console.error("Deal not found :",error);
            
        };
          
        // await new Promise((res) => setTimeout(res, 500));
        // await page.waitForNetworkIdle({idleTime:100})
        try {
            await page.waitForNetworkIdle({idleTime:100})
            await page.waitForSelector(selectors.side_button);
            console.log("side button found");
            await page.click(selectors.side_button);
            
                        
        } catch (error) {
            console.error("Side button was not selected :",error )
            
        };
        // await new Promise((res) => setTimeout(res, 500));
        try {
            await page.waitForNetworkIdle({idleTime:100})
            await page.waitForSelector(selectors.vehicle_type);
            console.log("vehicle found");
            await page.click(selectors.vehicle_type);
            
            
        } catch (error) {
            console.error("vehicle type had not been selected",error);
                        
        };

        try {
            await page.waitForNetworkIdle({idleTime:100})
            await page.waitForSelector(selectors.new_button);
            await page.click(selectors.new_button);
        } catch (error) {
            console.error("new button had not been clicked",error);
            
            
        };


    } catch (error) {
        console.error("Select_two_wheeler has been failed:",error)
        
    };

    
    
};

export default select_two_wheeler;


