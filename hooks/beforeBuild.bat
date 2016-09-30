rd /s /q www
md www
xcopy /Y /E src\* www\
cd www
webpack
cd..
build time: echo %DATE% %TIME%