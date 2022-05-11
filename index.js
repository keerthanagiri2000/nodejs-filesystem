const express= require('express');

const app= express();
const PORT= 5000;
const fs=require('fs');

//
app.get('/timestamp', function (request, response) {
 response.send(`${new Date()}`);
 
    fs.writeFile('./File_Folder/currentdate-time.txt', `${new Date()}`, (err) => {
    console.log("created file !!!");
   })
});

app.get('/text-file', function (request, response){
   
   function getFilesFromPath(path, textfile) {
      const files = fs.readdirSync( path );
      return files.filter( file => file.match(new RegExp(`.*\.(${textfile})`, 'ig')));
   }

   response.send(getFilesFromPath("./File_Folder", ".txt"));
   console.log("retrieve all txt files successfully !!!");

});


app.listen (PORT, () => console.log(`server started in ${PORT}`));

