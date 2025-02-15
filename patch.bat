@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "commit"
npm version patch
git push origin master

pause
