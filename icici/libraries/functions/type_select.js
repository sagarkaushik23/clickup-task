// import selectors from "../selectors.js";



// async function rto_select(page, inputText, optionText) {
//     // Type the text into the input field
//     await page.waitForNetworkIdle({idleTime:100})
//     await page.click(selectors.rto_inputselector);
//     await page.type(selectors.rto_inputselector, inputText);
  
//     // Wait for dropdown options to appear
//     await page.waitForSelector("mat-option");
  
//     // Select the desired option
//     const selected = await page.evaluate((text) => {
//       const option = Array.from(document.querySelectorAll("mat-option")).find(
//         (el) =>
//           el.querySelector("span") &&
//           el.querySelector("span").textContent.trim() === text
//       );
//       if (option) {
//         option.click();
//         return true;
//       } else {
//         return false;
//       }
//     }, optionText);
  
//     // Return the selection result
//     if (selected) {
//       console.log(`Successfully selected the option: ${optionText}`);
//     } else {
//       console.log(`Option with text "${optionText}" not found`);
//     }
  
//     // Press Enter to confirm the selection
//     await page.keyboard.press("Enter");
//     return selected;
//   };

  
//   // Function to select a model option
// async function select_model(page, inputText, modelText) {
//     // Type the model name into the input field
//     await page.click(selectors.model_inputselector);
//     await page.type(selectors.model_inputselector, inputText);
  
//     // Wait for dropdown options to appear
//     await page.waitForSelector("mat-option");
  
//     // Select the desired model option
//     const modelSelected = await page.evaluate((text) => {
//       const modelOption = Array.from(document.querySelectorAll("mat-option")).find(
//         (el) =>
//           el.querySelector("span") &&
//           el.querySelector("span").textContent.trim() === text
//       );
//       if (modelOption) {
//         modelOption.click();
//         return true;
//       } else {
//         return false;
//       }
//     }, modelText);
  
//     // Return the selection result
//     if (modelSelected) {
//       console.log(`Successfully selected the model option: ${modelText}`);
//     } else {
//       console.log(`Model option with text "${modelText}" not found`);
//     }
//     return modelSelected;
//   };



//   async function customer_state(page, inputText, stateText) {
//     // Type the model name into the input field
//     await page.click(selectors.model_inputselector);
//     await page.type(selectors.model_inputselector, inputText);
  
//     // Wait for dropdown options to appear
//     await page.waitForSelector("mat-option");
  
//     // Select the desired model option
//     const modelSelected = await page.evaluate((text) => {
//       const modelOption = Array.from(document.querySelectorAll("mat-option")).find(
//         (el) =>
//           el.querySelector("span") &&
//           el.querySelector("span").textContent.trim() === text
//       );
//       if (modelOption) {
//         modelOption.click();
//         return true;
//       } else {
//         return false;
//       }
//     }, modelText);
  
//     // Return the selection result
//     if (modelSelected) {
//       console.log(`Successfully selected the model option: ${modelText}`);
//     } else {
//       console.log(`Model option with text "${modelText}" not found`);
//     }
//     return modelSelected;
//   };


async function type_select(page, inputSelector, inputText, optionText) {
   
    await page.waitForSelector(inputSelector, { visible: true });
    
    
    await page.click(inputSelector);
    await page.type(inputSelector, inputText);
  
    
    await page.waitForNetworkIdle({idleTime:200})
    await page.waitForSelector("mat-option", { visible: true });
  
    
    const selected = await page.evaluate((text) => {
      const option = Array.from(document.querySelectorAll("mat-option")).find(
        (el) =>
          el.querySelector("span") &&
          el.querySelector("span").textContent.trim() === text
      );
      
      if (option) {
        option.click();
        return true;
      } else {
        return false;
      }
    }, optionText);
    await page.waitForNetworkIdle({idleTime:200})
    
    if (selected) {
      console.log(`Successfully selected the option: ${optionText}`);
    } else {
      console.log(`Option with text "${optionText}" not found`);
    }
  
    
    await page.keyboard.press("Enter");
  
    
    return selected;
  };
  
  
export default type_select;



