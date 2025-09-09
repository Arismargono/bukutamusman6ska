// Simple test to verify Vercel serverless function configuration
const fs = require('fs');
const path = require('path');

console.log('Testing Vercel serverless function configuration...');

// Check if required API files exist
const requiredApiFiles = [
  'api/[[...path]].js',
  'api/health.js'
];

let allApiFilesExist = true;
for (const file of requiredApiFiles) {
  if (fs.existsSync(file)) {
    console.log(`✓ ${file} exists`);
  } else {
    console.log(`✗ ${file} is missing`);
    allApiFilesExist = false;
  }
}

// Check if vercel.json has the correct structure
try {
  const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  
  // Check if builds array exists
  if (vercelConfig.builds && Array.isArray(vercelConfig.builds)) {
    console.log('✓ vercel.json has builds array');
    
    // Check if routes array exists
    if (vercelConfig.routes && Array.isArray(vercelConfig.routes)) {
      console.log('✓ vercel.json has routes array');
    } else {
      console.log('✗ vercel.json is missing routes array');
      allApiFilesExist = false;
    }
  } else {
    console.log('✗ vercel.json is missing builds array');
    allApiFilesExist = false;
  }
} catch (error) {
  console.log('✗ vercel.json is not valid JSON');
  allApiFilesExist = false;
}

if (allApiFilesExist) {
  console.log('\n✓ Vercel serverless function configuration appears to be correct');
  console.log('✓ The application should deploy successfully to Vercel');
  process.exit(0);
} else {
  console.log('\n✗ Vercel serverless function configuration has issues');
  console.log('✗ Please check the configuration files');
  process.exit(1);
}