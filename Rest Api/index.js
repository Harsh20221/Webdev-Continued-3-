import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

////#--Rest API are the api's that involve the following operations --- Get , Post , Patch , Put , Delete
///#--where Get is used to get the resource , post is used to save the resource and Put is used to change all the fields of the resource and Patch is used to change some of the fields of the resource and Delete is used to delete the resource



const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "b0539721-2dba-424f-8d34-a03b9a91f116";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => { ////? This will be responsible for the initial state of this webpage , This is what that will be initially displayed 
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  console.log(req.body) ///? By console logging it here we can check the name of parameters after req.body.? for diffrent spaces in the form
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  try {
   await axios.post(API_URL+"/secrets/",{"secret":req.body.secret,"score":req.body.score,"id":req.body.id},config)
    res.render("index.ejs", { content: "Secret Saved" }); ///? Instead of just showing a success message to the user we can also just rerender the whole webpage with the new content like this --- res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
  console.log(error.message)  
  }
});
///*THE Below is how we can send put api requests
app.post("/put-secret", async (req, res) => { //? Sending these Api requests is very easy , Just refer to the official documentation of the Api and also check the structure for particular rest api , whether is get  , put , post , patch or delete from the axios official dociumentation and then you are done , You can then structure your api requests through that exact way and you can check exactly what data you need to put in the particular api requests by the documentation of that particular api you are working with , and also what are the necessary elements that you need to enter in the API URL
  const searchId = req.body.id;
    try {
   await axios.put(API_URL+"/secrets/"+searchId,{"secret":req.body.secret,"score":req.body.score,"id":req.body.id},config)
    res.render("index.ejs", { content: "Secret  Changed" });
  } catch (error) {
  console.log(error.message)  
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
try {
   await axios.patch(API_URL+"/secrets/"+searchId,req.body,config) //!!Since for patch requests we just change some of the fields of the data so we input the whole req.body instead of all the fields like id , request , score seperately like in put request 
    res.render("index.ejs", { content: "Secret Content changed" });
  } catch (error) {
  console.log(error.message)  
  }
  
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
  try {
   await axios.delete(API_URL+"/secrets/"+searchId,config)
    res.render("index.ejs", { content: "Secret Deleted" });
  } catch (error) {
  console.log(error.message)  
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
