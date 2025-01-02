// import selectors from "../selectors.js";

// const quote_response  = async (page) => {
//     try {
//         await page.waitForSelector(selectors.recalculate_premium, {visible : true});
//         await page.click(selectors.recalculate_premium);
//         console.log("recalculate_premium has been created successfully");
//         await new Promise((res) => setTimeout(res, 40000));
//         const response = await page.waitForResponse(
//             (response) =>
//               response.url() === "https://app9.icicilombard.com/ilservices/motor/v1/proposal/twowheelercalculatepremium" &&
//               response.request().method() === "POST" &&
//               response.status() === 200
//           );
      
          
//           const apiResponse = await response.json();
      
          
//           function formatApiResponse(apiResponse) {
//             return {
//               statusCode: 200,
//               body: {
//                 statusCode: 200,
//                 policyType: apiResponse.policyType || "unknown",
//                 idv: {
//                   minIDV: apiResponse.idv?.minIDV || 0,
//                   value: apiResponse.idv?.value || 0,
//                   maxIDV: apiResponse.idv?.maxIDV || 0,
//                 },
//                 odPremiumDetails: {
//                   basic: apiResponse.odPremiumDetails?.basic || 0,
//                   discountPercentage: apiResponse.odPremiumDetails?.discountPercentage || 0,
//                   odAfterDiscount: apiResponse.odPremiumDetails?.odAfterDiscount || 0,
//                   ncbAmount: apiResponse.odPremiumDetails?.ncbAmount || 0,
//                   ncbPercentage: apiResponse.odPremiumDetails?.ncbPercentage || 0,
//                   loadingPercentage: apiResponse.odPremiumDetails?.loadingPercentage || 0,
//                   loadingAmount: apiResponse.odPremiumDetails?.loadingAmount || 0,
//                   nilDepAmount: apiResponse.odPremiumDetails?.nilDepAmount || 0,
//                   nilDepDiscount: apiResponse.odPremiumDetails?.nilDepDiscount || 0,
//                   nilDepPercentage: apiResponse.odPremiumDetails?.nilDepPercentage || 0,
//                   consumables: apiResponse.odPremiumDetails?.consumables || 0,
//                   engineProtect: apiResponse.odPremiumDetails?.engineProtect || 0,
//                   rti: apiResponse.odPremiumDetails?.rti || 0,
//                   batteryProtect: apiResponse.odPremiumDetails?.batteryProtect || 0,
//                   electricalAccessoriesPremium: apiResponse.odPremiumDetails?.electricalAccessoriesPremium || 0,
//                   electricalAccessoriesPremiumBeforeDiscount: apiResponse.odPremiumDetails?.electricalAccessoriesPremiumBeforeDiscount || 0,
//                   electricalAccessoriesDiscountAmount: apiResponse.odPremiumDetails?.electricalAccessoriesDiscountAmount || 0,
//                   nonElectricalAccessoriesPremium: apiResponse.odPremiumDetails?.nonElectricalAccessoriesPremium || 0,
//                   nonElectricalAccessoriesPremiumBeforeDiscount: apiResponse.odPremiumDetails?.nonElectricalAccessoriesPremiumBeforeDiscount || 0,
//                   nonElectricalAccessoriesDiscountAmount: apiResponse.odPremiumDetails?.nonElectricalAccessoriesDiscountAmount || 0,
//                   cngLoadingPremium: apiResponse.odPremiumDetails?.cngLoadingPremium || 0,
//                   cngLoadingPremiumBeforeDiscount: apiResponse.odPremiumDetails?.cngLoadingPremiumBeforeDiscount || 0,
//                   cngLoadingDiscountAmount: apiResponse.odPremiumDetails?.cngLoadingDiscountAmount || 0,
//                   otherCoveragesPremium: apiResponse.odPremiumDetails?.otherCoveragesPremium || 0,
//                   odNetAmount: apiResponse.odPremiumDetails?.odNetAmount || 0,
//                   GSTodNetAmount: apiResponse.odPremiumDetails?.GSTodNetAmount || 0,
//                   odGrossPremium: apiResponse.odPremiumDetails?.odGrossPremium || 0,
//                 },
//                 tpPremiumDetails: {
//                   tpBasic: apiResponse.tpPremiumDetails?.tpBasic || 0,
//                   tppdRestrictionAmount: apiResponse.tpPremiumDetails?.tppdRestrictionAmount || 0,
//                   basicPremiumAfterTppd: apiResponse.tpPremiumDetails?.basicPremiumAfterTppd || 0,
//                   cpa: apiResponse.tpPremiumDetails?.cpa || 0,
//                   passenger: apiResponse.tpPremiumDetails?.passenger || 0,
//                   llpd: apiResponse.tpPremiumDetails?.llpd || 0,
//                   otherCoveragesPremium: apiResponse.tpPremiumDetails?.otherCoveragesPremium || 0,
//                   tpNetAmount: apiResponse.tpPremiumDetails?.tpNetAmount || 0,
//                   gstTPNetAmount: apiResponse.tpPremiumDetails?.gstTPNetAmount || 0,
//                   tpGrossPremium: apiResponse.tpPremiumDetails?.tpGrossPremium || 0,
//                 },
//                 netPremium: apiResponse.netPremium || 0,
//                 gstOnPremium: apiResponse.gstOnPremium || 0,
//                 grossPremium: apiResponse.grossPremium || 0,
//               },
//             };
//           }
      
         
//           const formattedResponse = formatApiResponse(apiResponse);
      
        
//           console.log(JSON.stringify(formattedResponse, null, 2));
      
         
//           await browser.close();
//         } catch (error) {
//           console.error("An error occurred:", error);
//         }
//       };
          
      
//       export default quote_response;

