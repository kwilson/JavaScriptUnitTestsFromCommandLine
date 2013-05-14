@echo off
cls
echo Started test run at %DATE% %TIME%
echo.
call phantomjs-1.9.0-windows\phantomjs phantomjs-1.9.0-windows\runner.js tests.html 5

echo.
echo Finished test run at %DATE% %TIME%

pause