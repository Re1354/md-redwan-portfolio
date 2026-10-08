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
  
  // bg-white -> bg-background
  content = content.replace(/bg-white/g, 'bg-background');
  
  // bg-ink -> bg-surface
  content = content.replace(/bg-ink/g, 'bg-surface');
  
  // hover:bg-accent is fine
  // border-ink -> border-muted
  content = content.replace(/border-ink/g, 'border-muted');
  
  // text-white -> text-ink (which is now light)
  content = content.replace(/text-white/g, 'text-ink');
  
  // text-ink is already fine, because it's defined in tailwind config as light.
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced successfully');
