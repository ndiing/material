@echo off
setlocal enabledelayedexpansion

git add .

git commit -m "commit"

npm version patch

git commit -m "commit"


git push origin main

pause
