import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
//* This below code will fetch the html file for us to be displayed by the server
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

//* This will initialise express 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

///* This will display the html file when visting the localhost url 
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})
///* This will iniitialize the middleware 
app.use(bodyParser.urlencoded({extended:true}))
////* This will make sure once we push the submit button on the form then the server should send us the street and pet name that we inputted in the form 
app.post('/submit',(req,res)=>{
  const {street}=req.body
  const{pet}=req.body
 res.send(`<h1>The Name of The Street is ${street}</h1>
  <h2>The Name of the Pet is : ${pet}</h2>`)
 
})



