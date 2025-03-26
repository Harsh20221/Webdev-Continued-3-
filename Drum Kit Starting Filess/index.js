var noofdrums= document.querySelectorAll(".drum").length;

for( var i=0 ; i<noofdrums;i++){ /// THE FOR LOOP WILL ATTACH AN EVENT LISTENER TO ALL THE BUTTONS FIRST , THEN WHEN WE CLICK THE BUTTONS THEN THE DESCRIBED ACTION WILL TAKE PLACE 
document.querySelectorAll("button")[i].addEventListener("click",handleclick) ///?We want the function to trigger when the event listener is triggered that's why we will not use the function here  with parenthesis
function handleclick(){
    alert("I got Clicked")
    this.style.color ='white'
    var key= this.innerHTML;
    makesound(key)
    buttonanimation(key);
}
}
/////* We also add a event listener to the complete page to check for keyboard key presses, once we press the particular key far a particular drum sound our sound will get played 

document.addEventListener('keydown', function(event) { //? This is the way how we will make this , the way ityn works is it check which key is presssed and based on that it passes the pressed key to makesound which will execurte the drumroll
    makesound(event.key);
     buttonanimation(event.key)
});

function makesound(key){
switch (key) {
case 'w' :  
var tom1 = new Audio('/Users/harshkumar/Webdev/Webdev Continued-3 /Drum Kit Starting Filess/sounds/tom-1.mp3');
tom1.play();        
    break;
case 'a' :  
var tom2 = new Audio('/Users/harshkumar/Webdev/Webdev Continued-3 /Drum Kit Starting Filess/sounds/tom-2.mp3');
    tom2.play();        
        break;
        case 's' :  
var tom3 = new Audio('/Users/harshkumar/Webdev/Webdev Continued-3 /Drum Kit Starting Filess/sounds/tom-3.mp3');
    tom3.play();        
    break;
case 'd' :  
    var tom4 = new Audio('/Users/harshkumar/Webdev/Webdev Continued-3 /Drum Kit Starting Filess/sounds/tom-4.mp3');
    tom4.play();        
    break;  
 case 'j' :  
    var snare = new Audio('/Users/harshkumar/Webdev/Webdev Continued-3 /Drum Kit Starting Filess/sounds/snare.mp3');
    snare.play();        
    break;
case 'k' :  
    var crash= new Audio('/Users/harshkumar/Webdev/Webdev Continued-3 /Drum Kit Starting Filess/sounds/crash.mp3');
   crash.play();        
    break;
case 'l' :  
    var kick = new Audio('/Users/harshkumar/Webdev/Webdev Continued-3 /Drum Kit Starting Filess/sounds/kick-bass.mp3');
    kick.play();        
    break;                       
default:
    alert("NO BUTTON ")
    break;
}
}


function buttonanimation(currentKey){
    var activebutton = document.querySelector("." + currentKey) ///# We added . here because our button class are named as .w , .s in our css file 
    activebutton.classList.add("pressed") ///? The css decoration for pressed button is already written in css file so we are just using that straightaway

    setTimeout(function(){ //? This will reset the button back to original
    activebutton.classList.remove("pressed")
    },100)

}


