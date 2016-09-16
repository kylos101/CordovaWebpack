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
    exec("cd platforms/" + plat + "&&webpack&&cd..&&cd..", puts);
});