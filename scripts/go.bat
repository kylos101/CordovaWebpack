echo off
REM Our Cordova dev loop

REM make sure our www directory exists otherwise Cordova commands won't work
if not exist www md www

REM Build once and then setup a file watcher to do subsequent builds
start cmd /k "cordova build browser&&node watch.js""

REM Serve built content
start cmd /k "cordova serve 8001""
cls