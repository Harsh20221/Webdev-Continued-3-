///* This is how we can assign and use a node js package in our project 
import {randomSuperhero} from "superheroes"
const name = randomSuperhero();
var generatename= require('sillyname')
var sillyname=generatename()
console.log(sillyname)
console.log(name)