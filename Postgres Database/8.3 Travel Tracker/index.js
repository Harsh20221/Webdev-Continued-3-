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

///*THE BELOW FUNCTION WILL CHECK FOR VISITED COUNTRIES 
async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
   const countriesString = countries.join(',');
res.render('index.ejs',{countries:countriesString,total:countries.length})
});
///* hERE WE ARE SEARCHING FOFR THE COUNTRY CODE USING THE COUNTRY NAME THAT THE USERz HAS ENTERED AND STORING THE COUNTRY CODE OF THE COUNTRY THAT USER HAS ENTERED IN A DATABASE 
app.post('/add', async (req, res) => { 
  const inputstring = req.body.country;
  try {
      const foundcountrycode = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || ($1) || '%'; ", [inputstring.toLowerCase()]); //?The "ILIKE" Statement is used in this query for wildcard search when we do not exactly know what we want to search from the database ,
//!!FOIR THE CODE ABOVE Do not forget to add lower before(country_name) , This is the above query to find any country base don user input even if
try {
    if (foundcountrycode.rows.length > 0) {///!!!MAKE SURE YOU USE .rows to read data fetched from sql 
    const countryCode = foundcountrycode.rows[0].country_code;///!!Make sure you use .rows to read the data fetched from the sql 
    await db.query('INSERT INTO visited_countries (country_code) VALUES($1)', [countryCode]); ///!!MAKE SURE YOU ALSO USE AWAIT HERE WHILE INSERTING COUNTRY CODE
  }
  const countries=await checkVisisted()
   const countriesString = countries.join(',');
res.render('index.ejs',{countries:countriesString,total:countries.length})
} catch (error) {
  console.log(error)
    const countries=await checkVisisted()
   const countriesString = countries.join(',');
   res.render('index.ejs',{countries:countriesString,total:countries.length,error:"Country Already Exist Try with different country Again "})
}

  } 
  
  catch (error) {
  console.log(error)
    const countries=await checkVisisted()
   const countriesString = countries.join(',');
  res.render('index.ejs',{countries:countriesString,total:countries.length,error:"Country Does not Exist Try Again "})
  }


});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
