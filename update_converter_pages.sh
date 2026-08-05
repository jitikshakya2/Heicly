#!/bin/bash

# Script to update converter pages with proper header styling

# Files that need updating (those with basic headers)
files=(
    "/workspace/converters/bmp-to-jpg.html"
    "/workspace/converters/heic-to-pdf.html"
    "/workspace/converters/ico-to-png.html"
    "/workspace/converters/jfif-to-jpg.html"
    "/workspace/converters/jpg-to-avif.html"
    "/workspace/converters/png-to-avif.html"
    "/workspace/converters/svg-to-png.html"
    "/workspace/converters/tiff-to-jpg.html"
)

# New header HTML matching the main page style
new_header='  <header class="nav">
    <div class="brand">
      <div class="mark">
        <svg width="16" height="16" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <rect x="34" y="32" width="42" height="42" rx="6" fill="#14100e"/>
          <rect x="56" y="66" width="42" height="42" rx="6" fill="none" stroke="#14100e" stroke-width="7"/>
        </svg>
      </div>
      Heicly
    </div>
    <nav class="links">
      <a href="/index.html">Home</a>
      <a href="/#features">Features</a>
      <a href="/#tools">Tools</a>
      <a href="/blog/index.html">Blog</a>
      <a href="/Heicly/privacy-policy.html">Privacy Policy</a>
    </nav>
    <div class="nav-cta">No signup &middot; No uploads</div>
  </header>'

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Updating $file..."
        
        # Replace the old header block with the new one
        # Pattern: from <header> to </header>
        perl -i -0pe 's/<header>\s*<div class="container">\s*<a href="\/index\.html"[^>]*>Heicly<\/a>\s*<nav>\s*(?:<a href="[^"]*"[^>]*>[^<]*<\/a>\s*)+<\/nav>\s*<\/div>\s*<\/header>/'"$new_header"'/s' "$file"
        
        echo "Done."
    else
        echo "File not found: $file"
    fi
done

echo "All files processed!"
