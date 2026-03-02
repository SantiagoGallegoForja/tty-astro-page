import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const FUNCTIONS_DIR = '.vercel/output/functions';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (entry.name === '.vc-config.json') files.push(full);
  }
  return files;
}

const configs = await walk(FUNCTIONS_DIR);
for (const file of configs) {
  const content = JSON.parse(await readFile(file, 'utf8'));
  if (content.runtime === 'nodejs18.x') {
    content.runtime = 'nodejs20.x';
    await writeFile(file, JSON.stringify(content, null, 2));
    console.log(`Patched ${file} → nodejs20.x`);
  }
}
