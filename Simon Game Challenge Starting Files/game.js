///$('h1').css("color", "blue"); //! The Valid Syntax is .css not .color
var useraction;
var gamePattern=[]
var buttoncolors=["red","green","blue","yellow"]
var randomno = 0;
///* Random No generatoir btw  0-3 
function generaterandom() {
	randomno = Math.floor(Math.random() * 4); // Generates a random integer between 0 and 3
	return randomno
}
///* Storing random no then generating color based on random no and storing that as well 
var randomChosenColour=buttoncolors[generaterandom()];
gamePattern.push(randomChosenColour)
console.log(gamePattern)
//* Making Animate button into a function 
function animatebutton(buttonname){
$(`.${buttonname}`).fadeOut(100).fadeIn(100) ////!!!We used . here before $ because our buttons have a class not an id 
}
///* Calling aNimatE Button
animatebutton(randomChosenColour)
//* Making Player into a button
function player(name){
var playaudio = new Audio(`/Users/harshkumar/Webdev/Webdev Continued-3 /Simon Game Challenge Starting Files/sounds/${name}.mp3`);
playaudio.play(); }
///* Calling music player for random button 
player(randomChosenColour);

//* Clling audio player when user clicks a butonn 
$('.btn').click(function (event) {  ////!!!If you use ('button) then code will not work because in the html file the buttons arev assigned inside the div
	useraction = event.target.id;
	console.log(useraction)
   player(useraction) ///? Adding sound to user clicked button 
   animatebutton(useraction)///? Adding animation to user clicked button 
});
