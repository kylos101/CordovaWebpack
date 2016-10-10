REM create the Cordova working directory
if not exist www md www

REM move package libraries to the source folder
xcopy /Y "node_modules\jquery\dist\jquery.min.js" "src\js\vendor\jquery\*"
xcopy /Y "node_modules\jquery\dist\jquery.js" "src\js\vendor\jquery\*"
xcopy /Y "node_modules\jquery\dist\jquery.min.map" "src\js\vendor\jquery\*"

xcopy /Y "node_modules\bootstrap\dist\css\bootstrap*.css" "src\css\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\css\bootstrap*.map" "src\css\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\js\bootstrap*.js" "src\js\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\fonts\*.*" "src\css\vendor\bootstrap\fonts\*"
xcopy /Y "node_modules\bootstrap\dist\fonts\*.*" "src\css\vendor\fonts\*"
