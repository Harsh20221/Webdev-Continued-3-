import express from "express";
import bodyParser from "body-parser";///!!Make sure you define the bodyparser only like this 
const {json} =bodyParser///!! This should be the second line of bodyparser 

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Meat Taco","price": 3.49,"ingredients": {"protein": {"name": "Meat","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));///!! Do not forget to add this bodyparser statement to initialize the bodyparser 

app.get("/", (req, res) => {
  res.render("index.ejs",{recipe:data});
});
let data
app.post("/recipe", (req, res) => {
 
switch (req.body.choice) {  ///?? We have written res.body.choice because each button in ejs is defined by the name -- choice 
  case "chicken":
data=JSON.parse(recipeJSON)[0];    /// -- This Parse method will get the correct data from the Json 
    break;
 case "meat":
  data=JSON.parse(recipeJSON)[1];
  break;  
  case  "fish":
  data=JSON.parse(recipeJSON)[2]; 
  default:
    break;
}
res.redirect('/')////!!!!!!!! THIS LINE IS VERY IMPORTANT ELSE ONLY BUFFERING WILL HAPPEN WHEN CLICKING ANY BUTTRONS , As this will redirect 
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
