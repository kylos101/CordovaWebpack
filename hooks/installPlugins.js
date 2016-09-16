#!/usr/bin/env node
 
//this hook installs all your plugins
 
// add your plugins to this list--either 
// the identifier, the filesystem location 
// or the URL
var pluginlist = [
    "cordova-plugins-camera",
    "cordova-plugins-whitelist",
    "cordova-plugins-compat"
];
 
// no need to configure below
 
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
 
function puts(error, stdout, stderr) {
    console.log(stdout)
}
 
pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});