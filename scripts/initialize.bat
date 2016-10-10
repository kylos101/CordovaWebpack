SETLOCAL

REM this script is intended to be run once, for setup on a new machine

REM install global dependencies
call :npmInstall cordova
call :npmInstall webpack

REM install Cordova platforms
call :addPlatform android
call :addPlatform browser

REM download packages from package.json
npm install

goto :eof

:addPlatform
cmd /c "cordova platform add %~1"

:npmInstall
cmd /c "npm install -g %~1""