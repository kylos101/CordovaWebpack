#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),    
    child_process = require('child_process');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

var platforms = getDirectories("platforms");
platforms.forEach(function (plat) {                      
        
    if (plat === "android")
    {
        const child = child_process.spawn(
            "cmd.exe",
            ["/c", "webpack"],
            {cwd: path.normalize(path.join(process.cwd(), "platforms", plat, "assets","www"))}
        );

        child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        child.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        child.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
});