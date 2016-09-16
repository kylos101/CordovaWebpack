SETLOCAL

call :addPlatform android
call :addPlatform browser
goto :eof

:addPlatform
cmd /c "cordova platform add %~1"