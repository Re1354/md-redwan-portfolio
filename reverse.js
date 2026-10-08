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
  
  // Reverse backgrounds
  content = content.replace(/bg-background/g, 'bg-white');
  content = content.replace(/bg-surface/g, 'bg-ink');
  
  // Reverse border
  content = content.replace(/border-muted/g, 'border-ink');
  
  // Fix hover text
  content = content.replace(/hover:text-background/g, 'hover:text-white');
  
  // Fix button text colors: look for bg-ink and replace text-ink with text-white in the same className string
  // It's safer to just replace 'bg-ink px-5 py-3.5 text-ink' with 'bg-ink px-5 py-3.5 text-white'
  content = content.replace(/bg-ink(.*?)text-ink/g, 'bg-ink$1text-white');
  
  // Some places might have had bg-ink text-ink like `<span className="label-mono absolute right-3 top-3 bg-ink px-2 py-1 text-ink">`
  content = content.replace(/bg-ink px-2 py-1 text-ink/g, 'bg-ink px-2 py-1 text-white');
  
  // Project Detail modal has `bg-ink px-6 py-3 text-ink`
  content = content.replace(/bg-ink px-6 py-3 text-ink/g, 'bg-ink px-6 py-3 text-white');
  
  // Skills has bg-accent-soft text-base text-accent transition-colors group-hover:bg-accent group-hover:text-ink
  content = content.replace(/group-hover:text-ink/g, 'group-hover:text-white');
  
  // Projects StatusChip 'bg-accent-soft text-accent' -> keep as is.
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Reversed successfully');
