import loginpage from "./libraries/functions/login.js";
import policy_details from "./libraries/functions/policy_details.js";

import select_two_wheeler from  "./libraries/functions/select_two_wheeler.js";
// import quote_response from "./libraries/functions/response.js";

// import quote_response from "./libraries/functions/quoteresponse.js";
// 
const execute = async () => {

  let page=  await loginpage();
    
    
    await select_two_wheeler(page);
    await policy_details(page);
    // await quote_response(page);


 


    
}

execute();

