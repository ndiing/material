@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "Commit"

echo Running npm version patch...
call npm version patch --no-git-tag-version || echo ERROR: npm version patch failed! && pause && exit /b

git add .
git commit -m "Bump version"

git push origin main || echo ERROR: Git push failed! && pause && exit /b

pause
