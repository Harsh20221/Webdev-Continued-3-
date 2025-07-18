import React from "react";
import Returner from "./description";
import emojipedia from "../emojipedia.js"
///* In this project we are using Map function to display the records using the Map function , The map function helps to automatically read the required data from a javascript object , we do not have to write like -- emojipedia[0] then emojipedia[1] etc etc for subsequent records , The map automatically reads all that for us 
function emojiShow(emojidata){
  return(
    <Returner 
    key={emojidata.id}
    name={emojidata.name}
    content={emojidata.meaning}
    emoji={emojidata.emoji}
    >

    </Returner>
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
    {emojipedia.map(emojiShow)}
      </dl>
    </div>
  );
}

export default App;
