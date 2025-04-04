 ///* Using Node Packages in our project 

 ///!!!!!!VERY IMPORTANT WHILE USING NODE PACKAGES THAT YOU CHANGE TYPE In the packages.json to module else you will need to use require statement rather than the import statements
import generateName from "sillyname"
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
import superheroes, { randomSuperhero } from "superheroes";

const name = randomSuperhero()
console.log(name)
