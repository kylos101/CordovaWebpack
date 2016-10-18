#!/usr/bin/env node

// require some node modules (node and npm are out of scope unless there's time)
var watch = require('watch'),
fs = require('fs'),
path = require('path'),
exec = require('child_process').exec;

// state of whether this has been triggered
var triggered = false;

// utility function to output errors
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

// get the path to the src folder
var thePath = path.normalize(path.join(process.cwd(), "src"));

// establish a file watcher for the src folder
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
