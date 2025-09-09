// Simple test to verify deployment configuration
const fs = require('fs');
const path = require('path');

console.log('Testing deployment configuration...');

// Check if all required directories exist
const requiredDirs = [
  'dist',
  'dist/assets',
  'backend',
  'backend/photos',
  'api'
];

let allDirsExist = true;
for (const dir of requiredDirs) {
  if (fs.existsSync(dir) && fs.lstatSync(dir).isDirectory()) {
    console.log(`✓ ${dir} directory exists`);
  } else {
    console.log(`✗ ${dir} directory is missing`);
    allDirsExist = false;
  }
}

// Check if required files exist
const requiredFiles = [
  'dist/index.html',
  'dist/assets/index-CGugiTWj.js',
  'dist/assets/index-D9A4goXf.css',
  'backend/bukutamu.db',
  'api/[[...path]].js',
  'api/health.js',
  'vercel.json'
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

// Check vercel.json structure
try {
  const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  
  if (vercelConfig.builds && Array.isArray(vercelConfig.builds)) {
    console.log('✓ vercel.json has builds array');
  } else {
    console.log('✗ vercel.json is missing builds array');
    allFilesExist = false;
  }
  
  if (vercelConfig.routes && Array.isArray(vercelConfig.routes)) {
    console.log('✓ vercel.json has routes array');
  } else {
    console.log('✗ vercel.json is missing routes array');
    allFilesExist = false;
  }
} catch (error) {
  console.log('✗ vercel.json is not valid JSON');
  allFilesExist = false;
}

// Check if server.js exports the app correctly
try {
  const serverContent = fs.readFileSync('backend/server.js', 'utf8');
  if (serverContent.includes('module.exports = app')) {
    console.log('✓ backend/server.js exports the app correctly');
  } else {
    console.log('✗ backend/server.js does not export the app correctly');
    allFilesExist = false;
  }
} catch (error) {
  console.log('✗ Could not read backend/server.js');
  allFilesExist = false;
}

if (allDirsExist && allFilesExist) {
  console.log('\n✓ All required files and directories are present');
  console.log('✓ Deployment configuration appears to be correct');
  console.log('✓ The application should deploy successfully to Vercel');
  process.exit(0);
} else {
  console.log('\n✗ Some required files or directories are missing');
  console.log('✗ Please check the deployment configuration');
  process.exit(1);
}