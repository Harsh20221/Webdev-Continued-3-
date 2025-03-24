var noofdrums= document.querySelectorAll(".drum").length;

for( var i=0 ; i<noofdrums;i++){ /// THE FOR LOOP WILL ATTACH AN EVENT LISTENER TO ALL THE BUTTONS FIRST , THEN WHEN WE CLICK THE BUTTONS THEN THE DESCRIBED ACTION WILL TAKE PLACE 
document.querySelectorAll("button")[i].addEventListener("click",handleclick) ///?We want the function to trigger when the event listener is triggered that's why we will not use the function here  with parenthesis
function handleclick(){
    alert("I got Clicked")
    this.style.color ='white'
    var buttonInnerHTML= this.innerHTML;
switch (buttonInnerHTML) {
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
}


