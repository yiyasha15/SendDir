var express = require("express");
var app = express();
const fs = require('fs');
//to use images on node server
var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir)); 
//directory where txt file is present
const directoryPath ='/Users/yiyasha/Desktop/';
app.get("/getStatus", function (request, response){
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            if(file == 'initial.txt'){
                console.log("currently initial");
                return response.json({status: 'initial'})
            }
            else if(file == 'loading.txt'){
                console.log("currently loading");
                return response.json({status: 'loading'})
            }
            else if(file == 'finish.txt'){
                console.log("currently finish");
                return response.json({status: 'finish'})
            }
            else if(file == 'uploading.txt'){
                console.log("currently uploading");
                return response.json({status: 'uploading'})
            }
        });
    });
});
app.listen(8080,()=>{
    console.log("app started");
    });
 //start the server
 