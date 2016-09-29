echo off
REM Our Cordova dev loop; TODO: replace watch.js with grunt or something
start cmd /k node watch.js
start cmd /k lite-server
cls

REM Runs afterPrepare hooks
REM phonegap run browser --verbose 

REM Does NOT run afterPrepare hooks
REM phonegap serve --verbose

REM For debugging over the network
REM weinre --boundHost 192.168.1.145