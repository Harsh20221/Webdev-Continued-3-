import express from "express";

const app = express();
const port = 3000;
 //* Here we are creating our own middleware that will log the requests method and url made by the client into the console, wE are using Postman to check and make requests , Postman acts as our frontend or client to test out these backend features  
function logger (req,res,next) {
console.log("Request_Method:",req.method)
console.log("Request_URL",req.url);
next()
  }

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
