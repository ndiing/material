@echo off
setlocal enabledelayedexpansion

for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set timestamp=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%:%datetime:~12,2%

echo [INFO] Menjalankan auto commit, sync, dan update npm patch...

git add .
git commit -m "Auto commit on %timestamp%"

npm version patch

git push origin main

echo [SUCCESS] Semua proses selesai!
pause
