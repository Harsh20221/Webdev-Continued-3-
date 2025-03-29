///$('h1').css("color", "blue"); //! The Valid Syntax is .css not .color
var useraction;
var gamePattern=[]
var buttoncolors=["red","green","blue","yellow"]
var randomno = 0;
function generaterandom() {
	randomno = Math.floor(Math.random() * 4); // Generates a random integer between 0 and 3
	return randomno
}
var randomChosenColour=buttoncolors[generaterandom()];
gamePattern.push(randomChosenColour)
console.log(gamePattern)
$(`.${randomChosenColour}`).fadeOut(100).fadeIn(100) ////!!!We used . here before $ because our buttons have a class not an id 


var playaudio = new Audio(`/Users/harshkumar/Webdev/Webdev Continued-3 /Simon Game Challenge Starting Files/sounds/${randomChosenColour}.mp3`);
playaudio.play(); 

$('.btn').click(function (event) {  ////!!!If you use ('button) then code will not work because in the html file the buttons arev assigned inside the div
	useraction = event.target.id;
	console.log(useraction)
});
