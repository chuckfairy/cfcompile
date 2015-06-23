//Compiler test
//By Chuck

var COMPILER = require("../compiler.js");
var FS = require("fs");

COMPILER.compileFromConfigFile(  __dirname + "/test.json",  function(compressed) {

    FS.writeFile( __dirname + "/check.txt", compressed, function(err) {

        if(err) {

            console.log(err);

        } else {

            console.log("The file was saved!");

        }

    });

});
