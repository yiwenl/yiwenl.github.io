#!/bin/bash

# Build the Next.js project for production
echo "Building Next.js project..."
npm run export

echo "Build complete! Files are in the 'out' directory."
echo "You can test locally by serving the 'out' directory with a static server." 