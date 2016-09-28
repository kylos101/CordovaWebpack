REM xcopy /Y "node_modules\jquery-mobile\dist\jquery.mobile.min.js" "www\js\vendor\*"
REM xcopy /Y "node_modules\jquery-mobile\dist\jquery.mobile.js" "www\js\vendor\*"
REM xcopy /Y "node_modules\jquery-mobile\dist\jquery.mobile.min.map" "www\js\vendor\*"

REM xcopy /Y "node_modules\jquery-mobile\dist\jquery.mobile.min.css" "www\css\vendor\*"
REM xcopy /Y /S "node_modules\jquery-mobile\dist\images\*.*" "www\css\vendor\images\*"

xcopy /Y "node_modules\jquery\dist\jquery.min.js" "www\js\vendor\jquery\*"
xcopy /Y "node_modules\jquery\dist\jquery.js" "www\js\vendor\jquery\*"
xcopy /Y "node_modules\jquery\dist\jquery.min.map" "www\js\vendor\jquery\*"

xcopy /Y "node_modules\bootstrap\dist\css\bootstrap*.css" "www\css\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\css\bootstrap*.map" "www\css\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\js\bootstrap*.js" "www\js\vendor\bootstrap\*"
xcopy /Y "node_modules\bootstrap\dist\fonts\*.*" "www\css\vendor\bootstrap\fonts\*"
REM xcopy /Y "node_modules\bootstrap\dist\fonts\*.*" "www\fonts\*"
xcopy /Y "node_modules\bootstrap\dist\fonts\*.*" "www\css\vendor\fonts\*"