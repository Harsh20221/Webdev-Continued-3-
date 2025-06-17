// HINTS:
// 1. Import express and axios
import  express from "express" //!! Do not forgot to import all modules
import axios  from "axios"
// 2. Create an express app and set the port number.
const app = express()
const port = 3000
// 3. Use the public folder for static files.
app.use(express.static('public')) //!!This make sure that assets are loaded effectively whether on mac or windows or any. operating system
// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",async(req,res)=>{ //!!tHIS IS THE Main part of the code which handles all the get method and rendering of website
    try {
        const response=await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {
            secret: response.data.secret,
            user :response.data.username
        }  )
    } catch (error) {
        res.render("index.ejs",error.message)
    }
});
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port)