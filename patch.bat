@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "Commit"

npm version patch --no-git-tag-version
git add .
git commit -m "Bump version"

git push origin main

pause
