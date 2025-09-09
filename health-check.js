// Simple health check script to verify deployment configuration
const fs = require('fs');
const path = require('path');

console.log('Checking deployment configuration...');

// Check if required files exist
const requiredFiles = [
  'package.json',
  'vercel.json',
  'vercel-build.sh',
  'buku-tamu/package.json',
  'backend/package.json',
  'api/[[...path]].js'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(`✓ ${file} exists`);
  } else {
    console.log(`✗ ${file} is missing`);
    allFilesExist = false;
  }
}

// Check if required directories exist
const requiredDirs = [
  'buku-tamu/src',
  'backend'
];

for (const dir of requiredDirs) {
  if (fs.existsSync(dir) && fs.lstatSync(dir).isDirectory()) {
    console.log(`✓ ${dir} directory exists`);
  } else {
    console.log(`✗ ${dir} directory is missing`);
    allFilesExist = false;
  }
}

if (allFilesExist) {
  console.log('\n✓ All required files and directories are present');
  console.log('✓ Deployment configuration appears to be correct');
  process.exit(0);
} else {
  console.log('\n✗ Some required files or directories are missing');
  console.log('✗ Please check the deployment configuration');
  process.exit(1);
}