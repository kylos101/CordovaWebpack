#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),        
    exec = require('child_process').exec;

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function puts(error, stdout, stderr) {
    console.log(stdout)
}
 
var platforms = getDirectories("platforms");
platforms.forEach(function (plat) {                          
    if (plat === "browser")
    {
        var thePath = path.normalize(path.join(process.cwd(), "platforms", plat, "www"));
        var options = {                    
                    cwd: thePath                    
                    };

        exec("webpack", options, puts);
    }
});