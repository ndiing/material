@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "Commit"

npm version patch
git add .
git commit -m "Bump version"

git push --force origin main

pause
