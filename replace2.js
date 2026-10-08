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
  
  content = content.replace(/font-serif text-\[1\.08em\] font-normal italic /g, '');
  content = content.replace(/font-serif text-\[1\.06em\] font-normal italic /g, '');
  content = content.replace(/font-serif text-xl italic /g, 'text-xl ');
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced successfully');
