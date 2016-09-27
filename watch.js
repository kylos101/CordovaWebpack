#!/usr/bin/env node

var watch = require('watch'),
fs = require('fs'),
path = require('path'),        
exec = require('child_process').exec;

exec("cordova build browser", puts);

function puts(error, stdout, stderr) {
    console.log(stdout)

    if (stderr || error)
    {        
        console.log(".");
        console.log(stderr);
        console.log(".");
        console.log(error);
        console.log(".");
        console.log("Change a file and try again...");
        console.log(".");        
    }
}

var thePath = path.normalize(path.join(process.cwd(), "www"));
watch.createMonitor(thePath, function (monitor) {
           
    monitor.on("created", function (f, stat) {
        exec("cordova build browser", puts);
    })
    monitor.on("changed", function (f, curr, prev) {
        exec("cordova build browser", puts);
    })
    monitor.on("removed", function (f, stat) {
        exec("cordova build browser", puts);
    })   
});