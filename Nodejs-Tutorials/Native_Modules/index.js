const fs = require('fs');
fs.writeFile("newfile.txt","Hello ",(err)=>{
    if(err) throw err;
    console.log("File has been saved perfectly!!!")
});
fs.readFile("newfile.txt",'utf-8',(_,data) => { ///? Thew first parameter is for error 
      console.log("OUTPUT:",data)
    });