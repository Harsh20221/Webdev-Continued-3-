import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  password:"harsh@123",
  database:"world"
})
db.connect();

app.get("/", async (req, res) => {
let countries=[]
const countrylist=await db.query('SELECT country_code FROM visited_countries') 
countrylist.rows.forEach((country)=>{
  countries.push(country.country_code)
});
res.render('index.ejs',{countries:countries,total:countries.length})
});
///* hERE WE ARE SEARCHING FOFR THE COUNTRY CODE USING THE COUNTRY NAME THAT THE USER HAS ENTERED AND STORING THE COUNTRY CODE OF THE COUNTRY THAT USER HAS ENTERED IN A DATABASE 
app.post('/add', async (req, res) => { 
  const inputstring = req.body.country;
  const result = inputstring.toLowerCase().replace(/\s+/g, ''); //?This'll convert the user input country in lowercase without space
  const foundcountrycode = await db.query("SELECT country_code FROM countries WHERE  country_name ILIKE ($1)", [result]); //?The "ILIKE" Statement is used in this query for wildcard search when we do not exactly know what we want to search from the database  

  if (foundcountrycode.rows.length > 0) {///!!!MAKE SURE YOU USE .rows to read data fetched from sql 
    const countryCode = foundcountrycode.rows[0].country_code;///!!Make sure you use .rows to read the data fetched from the sql 
    await db.query('INSERT INTO visited_countries (country_code) VALUES($1)', [countryCode]); ///!!MAKE SURE YOU ALSO USE AWAIT HERE WHILE INSERTING COUNTRY CODE
  }
  res.redirect('/');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
