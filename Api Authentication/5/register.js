import axios from "axios";

const registerUser = async () => {
    try {
        const response = await axios.post('https://secrets-api.appbrewery.com/register', {
            username: "harsh7899",
            password: "IAmTheBest"
        });
        console.log("Registration successful:", response.data);
    } catch (error) {
        if (error.response) {
            console.error("Registration error:", error.response.data);
        } else {
            console.error("An error occurred:", error.message);
        }
    }
    {
    //!"apiKey": "9797a889-48aa-437c-8b68-a17242810826" , Authentication token: b0539721-2dba-424f-8d34-a03b9a91f116
}


};

registerUser();