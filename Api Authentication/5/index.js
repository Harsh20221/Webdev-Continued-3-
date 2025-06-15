import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";
var apiresponse=""
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
   try {
     const response=await axios.get(" https://secrets-api.appbrewery.com/random")
      res.render("index.ejs", { content: JSON.stringify(response.data) }); //!!!!SINCE THIS A STRING DATA MAKE SURE YOU DO NOT FORGET TO ADD JSON.stringify to convert the content data to a string else error will happen 
   } catch (error) {
    console.log(error.message)
    res.render("index.ejs", { content: "Error retrieving data" });
   }
  });

app.get("/basicAuth",async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try {///!!!The Try and Catch will be there in every api request and also make sure to use async and await in every request as well 
     const response=await axios.get("https://secrets-api.appbrewery.com/all?page=1", {
      auth: {
        username: "harsh7899",
        password: "IAmTheBest",
      },
    });
  res.render("index.ejs",{content:JSON.stringify(response.data)})
  } catch (error) {
    console.log(error)
  }
  

});

app.get("/apiKey",async (req, res) => { 
  //TODO 4: Write your code here to hit up the /filter endpoint
try {
  const api="9797a889-48aa-437c-8b68-a17242810826";
  const response = await axios.get( "https://secrets-api.appbrewery.com/filter",{
    params:{   //!!Make sure to add the params/parameters in the axios url parameter and insteead of writing the same boilerplate url you candefine the url in a variable  
      score:5,
      apiKey:api
    }
  })
res.render("index.ejs",{content:JSON.stringify(response.data)})///!!!MAKE SURE TO NOT WRITE index.js in the res.render , this line is used to render the webpage with retrieved data 
} catch (error) {
  console.log(error.message)
}
});

app.get("/bearerToken",async  (req, res) =>{
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  const accesstoken="b0539721-2dba-424f-8d34-a03b9a91f116 ";
  try {
   const response = await  axios.get("https://secrets-api.appbrewery.com/secrets/42" ,{
    headers: {  ///* Here we are using headers instead of params in this method of accessing the data using bearer tokens 
      Authorization:`Bearer ${accesstoken}` ///!!!!VERY IMPORTANT THAT YOU ADD YOUR API TOKEN IN THE SAME FORMAT With the word Bearer always in this same format only else error will happen , even writing Bearer as bearer will cause the error 
    },
  });
  res.render("index.ejs",{content:JSON.stringify(response.data)})//!!Make sure you always put response.data inside the stringify not just response 
  //? This is the correct way to geet the data from the server using  bearer token 
  } catch (error) {
  console.log(error.message)
  }
  
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
