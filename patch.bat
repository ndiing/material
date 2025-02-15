@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "commit"
git pull --rebase
git push origin main
npm version patch


pause
