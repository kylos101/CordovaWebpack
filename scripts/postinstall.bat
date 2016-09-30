REM xcopy /Y "node_modules\jquery-mobile\dist\jquery.mobile.min.js" "src\js\vendor\*"
REM xcopy /Y "node_modules\jquery-mobile\dist\jquery.mobile.js" "src\js\vendor\*"
REM xcopy /Y "node_modules\jquery-mobile\dist\jquery.mobile.min.map" "src\js\vendor\*"

REM xcopy /Y "node_modules\jquery-mobile\dist\jquery.mobile.min.css" "src\css\vendor\*"
REM xcopy /Y /S "node_modules\jquery-mobile\dist\images\*.*" "src\css\vendor\images\*"

xcopy /Y "node_modules\jquery\dist\jquery.min.js" "src\js\vendor\jquery\*"
xcopy /Y "node_modules\jquery\dist\jquery.js" "src\js\vendor\jquery\*"
xcopy /Y "node_modules\jquery\dist\jquery.min.map" "src\js\vendor\jquery\*"

xcopy /Y "node_modules\bootstrap\dist\css\bootstrap*.css" "src\css\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\css\bootstrap*.map" "src\css\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\js\bootstrap*.js" "src\js\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\fonts\*.*" "src\css\vendor\bootstrap\fonts\*"
REM xcopy /Y "node_modules\bootstrap\dist\fonts\*.*" "src\fonts\*"
xcopy /Y "node_modules\bootstrap\dist\fonts\*.*" "src\css\vendor\fonts\*"