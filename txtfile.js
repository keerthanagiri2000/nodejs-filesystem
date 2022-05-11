const fs = require ('fs')

//fs.readdir("./File_Folder/", (err, filename) => console.log(filename));
function getFilesFromPath(path, textfile) {
    let files = fs.readdirSync( path );
    return files.filter( file => file.match(new RegExp(`.*\.(${textfile})`, 'ig')));

}
console.log(getFilesFromPath("./File_Folder", ".txt"));
