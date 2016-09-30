echo off
REM Our Cordova dev loop
start cmd /k "cordova build browser&&node watch.js""
start cmd /k "cordova serve 8001""
cls

REM Runs afterPrepare hooks
REM phonegap run browser --verbose 

REM Does NOT run afterPrepare hooks
REM phonegap serve --verbose

REM For debugging over the network
REM use current ip address
REM weinre --boundHost 192.168.1.145