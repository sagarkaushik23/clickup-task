// time =5.50 second
import axios from "axios";

const solveCaptcha = async (base64Image) => {
    try {
        const response = await axios.post(
            "https://dgl002vjyl.execute-api.ap-south-1.amazonaws.com/dev/captchaSolver",
            {
                base64Image,
                brightness: 1,
                contrast: 1,
                sharpness: 1,
            },
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.data?.detected_text || null; // Return only detected text directly
    } catch (error) {
        console.error("Error solving CAPTCHA:", error.message);
        return null;
    }
};

export default solveCaptcha;






// retry 


// import axios from "axios";

// const solveCaptcha = async (base64Image, retries = 3) => {
//     try {
        
//         if (retries <= 0) {
//             console.error("Max retry attempts reached.");
//             return null;
//         }

//         const response = await axios.post(
//             "https://dgl002vjyl.execute-api.ap-south-1.amazonaws.com/dev/captchaSolver",
//             {
//                 base64Image,
//                 brightness: 1,
//                 contrast: 1,
//                 sharpness: 1,
//             }
//         );

        
//         if (response.data?.detected_text) {
//             return response.data.detected_text;
//         }

//         // If CAPTCHA is not solved, retry
//         console.log(`CAPTCHA not solved, retrying... (${retries - 1} attempts left)`);
//         await new Promise(res => setTimeout(res, 1000)); 
//         return solveCaptcha(base64Image, retries - 1);
//     } catch (error) {
//         console.error("Error solving CAPTCHA:", error.message);
//         return null;
//     }
// };

// export default solveCaptcha;
