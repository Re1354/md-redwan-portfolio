import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace hover:bg-accent with hover:bg-accent hover:text-background
  // But make sure not to double add
  content = content.replace(/hover:bg-accent(?! hover:text-background)/g, 'hover:bg-accent hover:text-background');
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced hover successfully');
