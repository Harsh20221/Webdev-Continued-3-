///$('h1').css("color", "blue"); //! The Valid Syntax is .css not .color
var useraction;
var userpattern=[]
var gamePattern=[]
var buttoncolors=["red","green","blue","yellow"]
var randomno = 0;
var level=1 //? We start the level counter from zero as we'll keep on increasing level from level zero 
///* Random No generatoir btw  0-3 
function generaterandom() {
	randomno = Math.floor(Math.random() * 4); // Generates a random integer between 0 and 3
	return randomno
}
///* Function for Next Sequence and increasing the level 
function nextSquence(){	
	userpattern=[]
 $('h1').text(`LEVEL ${level}`); 
 level=level+1
 randomgame()
}

//* Making Animate button into a function 
function animatebutton(buttonname){
	$(`.${buttonname}`).fadeOut(500).fadeIn(500) ////!!!We used . here before $ because our buttons have a class not an id 
	}


//* Universal function for music player 
function player(name){
	var playaudio = new Audio(`/Users/harshkumar/Webdev/Webdev Continued-3 /Simon Game Challenge Starting Files/sounds/${name}.mp3`);
	playaudio.play(); }


///* Storing random no then generating color based on random no and storing that as well and also playing music for that random color 
function randomgame(){	
			var randomChosenColour=buttoncolors[generaterandom()];
			gamePattern.push(randomChosenColour)
			console.log(gamePattern)
			
//* Calling aNimatE Button 
			animatebutton(randomChosenColour) //??The line below 500*index is there for delay
///* Calling music player for button 
player(randomChosenColour);
		
	$('.btn').prop('disabled', true);//? This is how you can disable a button usin  jquery , This is done to ensure the user inputs does not work when the pattern is being displayed 
	}
	

////* Display Level-1 After First Input and display random pattern 
$(document).keypress(function () { 
	$('h1').text('LEVEL 1')
	randomgame()
	$(document).off("keypress"); ///!!!!MAKE SURE TO UNBIND THE KEYPRESS EVENT AFTER THE FIRST KEYPRESS ELSE NEW PATTERNS WILL COME AFTER EVERY KEYPRESS 
});

//*  when user clicks a butonn 
$('.btn').click(function (event) {  ////!!!If you use ('button) then code will not work because in the html file the buttons arev assigned inside the div
	useraction = event.target.id;
	console.log(useraction)
   player(useraction) ///? Adding sound to user clicked button 
   animatebutton(useraction)///? Adding animation to user clicked button 
   userpattern.push(event.target.id) 
   validateuser()
});



///* Function to  validate user input 
function validateuser(){
for(var i=0 ; i< gamePattern.length;i++){	
if(userpattern[i]!=gamePattern[i]){
	alert("YOU HAVE FAILED")
}

}

if(userpattern.length==gamePattern.length){
	nextSquence()
}
}


