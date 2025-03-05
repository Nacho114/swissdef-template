#!/bin/bash

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null
then
    echo "Error: cwebp is not installed. Install it with: brew install webp"
    exit 1
fi

# Convert PNG and JPG images to WebP recursively
find . -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read file; do
    output="${file%.*}.webp"
    
    # Skip if WebP already exists
    if [ -f "$output" ]; then
        echo "Skipping: $output (already exists)"
        continue
    fi

    # Convert to WebP
    echo "Converting: $file → $output"
    cwebp -q 80 "$file" -o "$output"
done

echo "✅ Conversion completed!"
