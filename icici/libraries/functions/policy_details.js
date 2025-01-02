import selectors from "../selectors.js";
import type_select from "./type_select.js";
import selectdate from "./date_picker.js";
import quote_response from "./response.js";
import click_evaluate from "./click_evaluate.js";
import formatQuoteResponse from "./formatted_response.js"



const policy_details =  async (page) => {
    try {
        const rtosuccess = await type_select(page, selectors.rto_inputselector,'HARYANA', 'HARYANA-AMBAL');
        if(!rtosuccess){
            console.log("failed to select rto");
            
        };
        const modelselect = await type_select(page, selectors.model_inputselector,'HERO HONDA', 'HERO HONDA - CD 100 (100 CC)');
        if(!modelselect){
            console.log("Failed to select Model");
            
        };

        await page.waitForSelector(selectors.individual, { visible: true });
        await page.click(selectors.individual);
        console.log("Customer type selected");

        await page.waitForSelector(selectors.cpa, { visible: true });
        // await page.click(selectors.cpa);
        await page.select('#quotesection > div:nth-child(5) > select','2year')
        console.log("cpa selected");

        await page.waitForSelector(selectors.tenure,{visible:true});
        await page.click(selectors.tenure);
        console.log("tenure selected");
        
        const result = await selectdate(page,selectors.registration_date, '23/12/2024');
        console.log(result); 

        const result2 = await selectdate(page,selectors.policy_start_date,'24/12/2024');
        console.log(result2);

        // await page.waitForNetworkIdle({idleTime:100})
        // await page.select("#quotesection > div:nth-child(9) > select",'2025');
        // console.log("manufaturer has been selected");
        await page.waitForNetworkIdle({idleTime:100})
        await page.waitForSelector("#get_quote",{visible:true});

        try {
          await click_evaluate(page,selectors.get_quote)
          console.log("get quote clicked")
          
        } catch (error) {
          console.error("Get quote button not cicked:",error);
          
        };
        
        // await page.click("#get_quote");
        // console.log("quote_generated");

        await page.waitForSelector("#prem1 > div.contdiv > h2", { visible: true });
        const premium = await page.$eval(
          "#prem1 > div.contdiv > h2",
          (el) => el.textContent
        );
        console.log("Premium:", premium);

        
    
        
        await page.$$eval("a", (links) => {
          const link = links.find((el) => el.textContent.trim() === "Click here");
          if (link) {
            link.click()
          } else {
            console.error("Link with text 'Click here' not found.");
          }
        });

        // // Handle Checkboxes
       
        // await page.waitForNetworkIdle({idleTime:100})
        // const isChecked = await page.$eval("#alreadyholdsPAcoverof15L", (checkbox) => checkbox.checked);
        // await page.waitForNetworkIdle({idleTime:100})
        // try {
          // await page.waitForNetworkIdle({idleTime:100})
        // await click_evaluate(page,selectors.pa_cover,{visible:true});
        // console.log("alreadyholdsPAcoverof15L clicked");
          
        // } catch (error) {
        //   console.error("Error while clicking the element on 15l:", error);
        // };
        // await page.waitForNetworkIdle({idleTime:100})
        
        
    
        // const Checked = await page.$eval("#ZeroDepPlanName", (checkbox) => checkbox.checked);
        // try {
        // await page.waitForNetworkIdle({idleTime:100})
        // await click_evaluate(page, selectors.nd);
        // console.log("nd clicked");
          
        // } catch (error) {
        //   console.error("Error while clicking the element on nd:", error);
        // };
        // await page.waitForNetworkIdle({idleTime:100})
        // if (!Checked) {
        //   await page.click("#ZeroDepPlanName");
        //   console.log("Checkbox selected.");
        // } else {
        //   console.log("Checkbox was already selected.");
        // }
        // // await new Promise((res) => setTimeout(res, 500));
        // await page.waitForNetworkIdle({idleTime:100})
    
        // await page.waitForSelector(selectors.pa_cover);
        // await page.click(selectors.pa_cover);
        // console.log("Already Holds the PA cover of 15L Sum Insured selected");
        
        // // await new Promise((res) => setTimeout(res, 500));
        // await page.waitForNetworkIdle({idleTime:100})
        // await page.waitForSelector(selectors.nd);
        // await page.click(selectors.nd);
        // console.log("Zero Depreciation Cover selected");
        // await page.waitForNetworkIdle({idleTime:500})
        try {
            
            const response = await quote_response(page, selectors.recalculate_premium, 'https://app9.icicilombard.com/ilservices/motor/v1/proposal/twowheelercalculatepremium');
            const formattedResponse = formatQuoteResponse(response);
            console.log(formattedResponse);
             
        } catch (err) {
            console.error("Error while extracting data:", err);
          };
          
        
    



        
        
        
        try {
          await click_evaluate(page,selectors.submit_quote);
          console.log("clicked");
          
          
          
        } catch (error) {
          console.error("submit button not clicked",error);
          
        };
        

        await page.waitForSelector(selectors.engineno_input,{visible:true});
        await page.click(selectors.engineno_input);
        // await page.waitForNetworkIdle({idleTime:500})
        // try {
          
        //   // await click_evaluate(page, selectors.engineno_input);
        //   // console.log("clicked element");
          
        // } catch (error) {
        //   console.error("Error while clicking the element:", error);
        // };
        await page.type(selectors.engineno_input,"136263232632528762763266263263")
        console.log("engine_no. selected");
        
        
        await page.waitForSelector(selectors.chassisno_input);
        await page.click(selectors.chassisno_input);
        await page.type(selectors.chassisno_input,"de723463262378787"); 
        console.log("chassis no. selected");  

        await page.waitForSelector(selectors.vehicle_colour_input);
        await page.click(selectors.vehicle_colour_input);
        await page.type(selectors.vehicle_colour_input,"black");
        console.log("colour selected");

        try {
          await click_evaluate(page,selectors.do_it_later);
          console.log(do_it_later_clicked);
          
          
        } catch (error) {
          console.error("do it later not clicked:",error)
          
        };
        await page.waitForSelector(selectors.do_it_later,{visible:true});
        await page.click(selectors.do_it_later);
        await page.type(selectors.do_it_later);
        console.log("do it later clicked");


        
        // await page.
    } catch (error) {
      console.log(error.stack)
        console.error("failed to fill policy details:" ,error);
        

    };
    
};

export default policy_details;
