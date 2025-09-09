#!/bin/bash

# Exit on any error
set -e

# Install root dependencies
npm install

# Install frontend dependencies
cd buku-tamu
npm install

# Build frontend
npm run build

# Move build to root dist folder
mv dist ../dist

# Install backend dependencies
cd ../backend
npm install

# Initialize database
npm run init-db

# Go back to root
cd ..