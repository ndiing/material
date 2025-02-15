@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "Commit"

npm version patch

git push origin main

pause
