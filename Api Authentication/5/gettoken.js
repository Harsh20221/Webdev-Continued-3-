import axios from "axios";

const getAuthToken = async () => {
    try {
        const response = await axios.post('https://secrets-api.appbrewery.com/get-auth-token', {
            username: "harsh7899",
            password: "IAmTheBest"
        });
        console.log("Authentication token:", response.data.token);
    } catch (error) {
        if (error.response) {
            console.error("Authentication error:", error.response.data);
        } else {
            console.error("An error occurred:", error.message);
        }
    }
};
///!!!Authentication token: b0539721-2dba-424f-8d34-a03b9a91f116

getAuthToken();