import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result , erroratback:""},);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      erroratback: error.message,
    });
  }
});

app.post("/", async (req, res) => {

  try {
    let type=req.body.type
let participants=req.body.participants
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
    const result = response.data;
    console.log(result)
    res.render("index.ejs", { data: result[Math.floor(Math.random()*result.length)] , erroratback:""},); //? Once you search for a particular activity with the filters then you might get 3-4 results from the api call  so to just display a single result out of those to then user we use this randomizer ,This code line is designed to select a random element from the array called `result`. It uses `Math.random()` to generate a random decimal between 0 (inclusive) and 1 (exclusive), multiplies that number by the length of the `result` array, and then applies `Math.floor()` to convert it into a whole number. This whole number serves as the index of the element to be returned.
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { data:{}, ///!! Make sure you pass data even at the catch block else error will happen 
      erroratback: error.message,
    });
  }

});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
