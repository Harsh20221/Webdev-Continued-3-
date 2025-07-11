import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
////!!!!!VERY IMPORTANT -- IF THE PROJECT IS BUILD IN REACT 17 AND YOU USED THE NEWER REACT 18 SYNTAX THEN IT WILL NOT RUN , ignore all tyhe depracted warnings and go ahead 
///* This index file is very important as it links to our App.jx file which is our main file where the code is run to out html file that is index.html
ReactDOM.render(<App />, document.getElementById('root'));

//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
