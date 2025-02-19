@echo off
setlocal enabledelayedexpansion

git add .
git commit -m "Perbarui dokumen dan demo"

call npm version patch

git add .
git commit -m "Perbarui versi"

git push origin main

pause
