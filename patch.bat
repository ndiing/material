@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "Commit"

npm version patch
git add .
git commit -m "Commit"

git push origin main

pause
