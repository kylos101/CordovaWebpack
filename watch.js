#!/usr/bin/env node

var watch = require('watch'),
fs = require('fs'),
path = require('path'),        
exec = require('child_process').exec;

var triggered = false;

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

var thePath = path.normalize(path.join(process.cwd(), "src"));
watch.createMonitor(thePath, function (monitor) {
        
    monitor.on("created", function (f, stat) {
        if (!triggered)
        {
            triggered = true;
            exec("cordova build browser&&echo built on: %DATE% %TIME%", puts);
            triggered = false;
        }      
    });
    monitor.on("changed", function (f, curr, prev) {
        if (!triggered)
        {
            triggered = true;
            exec("cordova build browser&&echo built on: %DATE% %TIME%", puts);
            triggered = false;
        }       
    });
    monitor.on("removed", function (f, stat) {
        if (!triggered)
        {
            triggered = true;
            exec("cordova build browser&&echo built on: %DATE% %TIME%", puts);
            triggered = false;
        }       
    });  
});
