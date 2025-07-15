import React from "react";
import ReactDOM from "react-dom";

function Card (props){
   return  ( <div> ///?!!! Make sure you enclose the custom card inside return statement of the function and elements should be stored inside the div 
   <h2>{props.name}</h2>
    <img
      src={props.img} 
      alt={props.alt}
      
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
   </div>)
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

<Card name="Beyonce" img="https://th.bing.com/th/id/OIP.y_sKSnZg4GJ5Jj8kQZAKxAHaNK?w=116&h=186&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" tel='78998979889' email="tty@gmail.com" alt='Face of beyonce' > </Card> //!!Make sure the card is closed with a closing tag 
    <h2>Jack Bauer</h2>
    <img
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
    />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
