REM how to call webpack w/o a configuration file 
REM webpack www\js\index.js www\js\bundle.js --module-bind 'css=style!css'

REM automatically builds, we have to F5 to refresh
REM webpack --progress --colors

REM automatically builds and refreshes
REM TODO: call this via npm start
REM webpack-dev-server --progress --colors