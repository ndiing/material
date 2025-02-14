@echo off
cd /d %~dp0

:: Menjalankan git pull untuk menarik perubahan terbaru dari remote repository
echo Menarik perubahan terbaru dari remote repository...
git pull origin main

:: Meningkatkan versi npm pada patch dan menyimpan versinya
echo Meningkatkan versi npm pada patch...
for /f "delims=" %%v in ('npm version patch') do set VERSION=%%v

:: Menjalankan git add dan commit otomatis
echo Menambahkan semua perubahan dan melakukan commit...
git add .
git commit -m "update %VERSION%"

:: Push perubahan ke remote repository
echo Mendorong perubahan ke remote repository...
git push origin main --tags

echo Selesai!
pause
