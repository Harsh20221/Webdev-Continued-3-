import React from "react";
import Card from "./Card";
import contacts from "../contacts.js"
   ///!!!Make sure you wrap all Javascript variables like here we are fetching contacts[1].name inside curly brackets {} else it will not render 
function showContact (contact){
  return(
<Card
key={contact.id}
name={contact.name}
img={contact.imgURL}
number={contact.phone}
email={contact.email}
>

</Card>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
{contacts.map(showContact)}
</div>



    
  );
}

export default App;
