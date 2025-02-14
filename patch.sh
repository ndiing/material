#!/bin/bash

# Tarik perubahan terbaru dari remote
git pull origin $(git rev-parse --abbrev-ref HEAD)

# Periksa apakah package.json atau composer.json ada
if [ -f "package.json" ]; then
    echo "Menjalankan npm version patch..."
    npm version patch
elif [ -f "composer.json" ]; then
    echo "Menjalankan composer update..."
    composer update
else
    echo "Tidak ada package.json atau composer.json, keluar..."
    exit 1
fi

# Tambahkan semua perubahan ke staging
git add .

# Buat commit dengan pesan otomatis
git commit -m "Auto update package version & dependencies"

# Push ke repository remote
git push origin $(git rev-parse --abbrev-ref HEAD)

echo "Update berhasil!"
