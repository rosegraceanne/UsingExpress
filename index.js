var express = require('express');
var app = express();
var path = require('path');

 
app.get('/', function (req, res) {
  //res.send('Hello World');

    res.sendFile(path.join(__dirname +"/index.html"));
})

// function about(){
 
//     app.get('/', function (req, res) {
        
//            res.sendFile(path.join(__dirname +"/about.html"));
//        })
// }

app.listen(3000);