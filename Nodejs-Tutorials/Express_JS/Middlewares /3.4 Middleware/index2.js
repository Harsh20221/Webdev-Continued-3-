import express from "express";
import morgan  from "morgan";
const app = express();
const port = 3000;
app.use(morgan('tiny')) //? Using this morgan npm package will log all the requests sent by the user ( here we are using postman as a user ) to the comnsole 


app.get("/", (req, res) => {
  res.send("Hello");
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
