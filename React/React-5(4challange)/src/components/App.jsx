import React from "react";
import Card from "./Card";
import contacts from "../contacts.js"
   ///!!!Make sure you wrap all Javascript variables like here we are fetching contacts[1].name inside curly brackets {} else it will not render 
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
   <Card
   name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" email="b@beyonce.com" number="+123 456 789"></Card>
<Card name={contacts[1].name} email={contacts[1].email} img={contacts[1].imgURL} number={contacts[1].phone}/> 
<Card name={contacts[2].name} email={contacts[2].email} img={contacts[2].imgURL} number={contacts[2].phone}/> 


</div>



    
  );
}

export default App;
