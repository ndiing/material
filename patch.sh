#!/bin/bash

# Tarik perubahan terbaru dari remote
git pull origin $(git rev-parse --abbrev-ref HEAD)

# Periksa apakah package.json ada
if [ -f "package.json" ]; then
    echo "Menjalankan npm version patch..."
    
    # Meningkatkan versi patch pada package.json
    npm version patch --no-git-tag-version

    # Commit dengan pesan versi terbaru
    VERSION=$(node -p "require('./package.json').version")
    COMMIT_MESSAGE="Update package version to $VERSION"
elif [ -f "composer.json" ]; then
    echo "Menjalankan composer update..."
    composer update
    COMMIT_MESSAGE="Update dependencies (composer)"
else
    echo "Tidak ada package.json atau composer.json, keluar..."
    exit 1
fi

# Tambahkan semua perubahan ke staging
git add .

# Buat commit dengan pesan otomatis berdasarkan versi baru
git commit -m "$COMMIT_MESSAGE"

# Push ke repository remote
git push origin $(git rev-parse --abbrev-ref HEAD)

echo "Update berhasil: $COMMIT_MESSAGE"
