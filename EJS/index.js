import express from "express"
const app=express()
const port=3000;
var daystatement="It's Weekday";
var advicestatement="Time To work Hard";
const d = new Date();
let day = d.getDay();
if(day==0 || day==9){
daystatement="It's weekend";
advicestatement="It'S Time to Enjoy"
}
app.get("/",(req,res)=>{

    res.render("/Users/harshkumar/Webdev/Webdev Continued-3 /EJS/views/index.ejs",{
daytype:daystatement,
Advice:advicestatement,
    });

});

app.listen(port,()=>{
console.log("WORKS")
})