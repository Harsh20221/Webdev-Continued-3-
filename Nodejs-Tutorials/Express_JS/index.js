///TIPS: Use  "nodemon index.js" to run this file because nodemon package will automatically restart server whenever there is a change in the code 
///TIP-2 use "npm init -y" to create a empty npm project 
///TIP-3 use "npm install -global package_name" to install any package globally to be used with any project 
import bodyParser from 'body-parser';
import express from 'express'
const app=express();
const port = 3000
app.get("/",(req,res)=>{ ///? This is how you make a get request in Express js 
  res.send("<h1>Hello_World</h1>")
});
app.get('/about', (req, res) => {
  res.send('THIS IS THE ABOUT SEC')
})
app.get('/contact', (req, res) => {
  res.send(`This is the Contact section:999999999999` )
})
app.delete('/user/angela',(req,res)=>{
  res.sendStatus(200);  
}
)

app.put('/user/angela', (req, res) => {
  console.log("PUT /user/angela was called");
  res.sendStatus(200);
})

app.patch('/user/angela', (req, res) => {
res.sendStatus(200);
})

app.use( bodyParser.urlencoded({extended:true}));
app.post('/submit',(req,res)=>{
  console.log(req.body)
})

app.listen(port,()=>{ //?This is how you initialize a server in express , Before using app.listen install express using npm and before installing initialise npm using npm init commmand
console.log(`Server Created at port ${port}`)
})
