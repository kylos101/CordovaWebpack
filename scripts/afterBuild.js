var fs = require('fs'),
    path = require('path'),
    exec = require('child_process').exec;

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

var platforms = getDirectories("./platforms");
platforms.forEach(function (plat) {    
    console.log("webpacking..." + plat);
    exec(plat + "/webpack");
});