#!/bin/bash

# List of all converter pages
pages=(
    "avif-to-jpg"
    "avif-to-png" 
    "jpg-to-avif"
    "png-to-avif"
    "heic-to-pdf"
    "tiff-to-jpg"
    "svg-to-png"
    "ico-to-png"
    "jfif-to-jpg"
    "bmp-to-jpg"
)

for page in "${pages[@]}"; do
    file="/workspace/converters/${page}.html"
    if [ -f "$file" ]; then
        echo "Processing $page..."
        
        # Fix internal links paths (add converters/ prefix where needed)
        sed -i 's|href="/avif-to-jpg"|href="/converters/avif-to-jpg.html"|g' "$file"
        sed -i 's|href="/avif-to-png"|href="/converters/avif-to-png.html"|g' "$file"
        sed -i 's|href="/jpg-to-avif"|href="/converters/jpg-to-avif.html"|g' "$file"
        sed -i 's|href="/png-to-avif"|href="/converters/png-to-avif.html"|g' "$file"
        sed -i 's|href="/heic-to-pdf"|href="/converters/heic-to-pdf.html"|g' "$file"
        sed -i 's|href="/tiff-to-jpg"|href="/converters/tiff-to-jpg.html"|g' "$file"
        sed -i 's|href="/svg-to-png"|href="/converters/svg-to-png.html"|g' "$file"
        sed -i 's|href="/ico-to-png"|href="/converters/ico-to-png.html"|g' "$file"
        sed -i 's|href="/jfif-to-jpg"|href="/converters/jfif-to-jpg.html"|g' "$file"
        sed -i 's|href="/bmp-to-jpg"|href="/converters/bmp-to-jpg.html"|g' "$file"
        sed -i 's|href="/"|href="/index.html"|g' "$file"
        
        echo "  ✓ Fixed internal links"
    fi
done

echo "Done!"
