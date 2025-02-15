@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "Commit"

git push origin main

npm version patch
git add .
git commit -m "Bump version"

git push origin main

pause
