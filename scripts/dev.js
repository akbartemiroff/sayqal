const { exec } = require('child_process');
const path = require('path');

// Start Next.js development server
const nextProcess = exec('npm run dev', { stdio: 'inherit' });

console.log('Starting Next.js development server...');

// Handle process termination
process.on('SIGINT', () => {
  console.log('Stopping development server...');
  nextProcess.kill();
  process.exit();
});

nextProcess.stdout.on('data', (data) => {
  console.log(data);
});

nextProcess.stderr.on('data', (data) => {
  console.error(data);
}); 