#!/bin/bash

# Install imagemagick
nix-shell -p imagemagick

# Base directory to start searching from, "." means the current directory
base_directory="."

# Find all .jpg files in all subdirectories and apply the convert command
find "$base_directory" -type f -iname "*.jpg" -exec sh -c 'convert "$1" -resize 396x "${1%.jpg}_s.jpg"' _ {} \;

