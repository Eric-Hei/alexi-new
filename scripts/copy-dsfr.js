const fs = require('fs');
const path = require('path');

// Créer le dossier public/dsfr s'il n'existe pas
const dsfrDir = path.join(__dirname, '../public/dsfr');
if (!fs.existsSync(dsfrDir)) {
  fs.mkdirSync(dsfrDir, { recursive: true });
}

// Copier les fichiers JS du DSFR
const dsfrSrcDir = path.join(__dirname, '../node_modules/@gouvfr/dsfr/dist');
const filesToCopy = [
  'dsfr.module.min.js',
  'dsfr.nomodule.min.js'
];

filesToCopy.forEach(file => {
  const srcPath = path.join(dsfrSrcDir, file);
  const destPath = path.join(dsfrDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to public/dsfr/`);
  } else {
    console.error(`File not found: ${srcPath}`);
  }
});

console.log('DSFR files copied successfully!');
