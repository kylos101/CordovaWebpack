SETLOCAL

call :npmInstall cordova
call :npmInstall webpack
call :npmInstall webpack-dev-server

call :addPlatform android
call :addPlatform browser

goto :eof

:addPlatform
cmd /c "cordova platform add %~1"

:npmInstall
cmd /c "npm install -g %~1"" 