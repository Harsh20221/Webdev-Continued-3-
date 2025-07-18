import express from "express";
import bodyParser from "body-parser";
import pg from  "pg"
import { name } from "ejs";
const app = express();
const port = 3000;

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

///* Code for database  Initialization
const db = new pg.Client({
user:"postgres",
database:"world",
host:"localhost",
password:"harsh@123",
port:5432
});
db.connect()

////* Code for Database Query 
db.query("SELECT * FROM flags",(err,res)=>{
if(err){
  console.error("Error Executing Query",err.stack)
}
else {
quiz=res.rows
}
db.end()
})

let quiz=[
{name:"India",flag:""}
]


// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) { ///!!Make sure you compare the right parameters 
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
