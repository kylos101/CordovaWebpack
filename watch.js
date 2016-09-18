#!/usr/bin/env node

var watch = require('watch'),
fs = require('fs'),
path = require('path'),        
exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    console.log(stdout)
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