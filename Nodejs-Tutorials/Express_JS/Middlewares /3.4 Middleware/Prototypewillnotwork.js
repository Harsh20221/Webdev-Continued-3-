import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//* Here we are learning to use the middleware , Middleware acts as a layer between the sender ands server when sending get ,post , put requests
//# The code Below will print whatever we are typing in the html form in our console , This will be done using the middleware 
app.use(bodyParser.urlencoded({extended:true}))

app.post('/submit',(req,res)=>{
  console.log(req.body)
})