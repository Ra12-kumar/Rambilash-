// Converts product photos in public/images/products from JPEG/PNG to WebP.
// Usage: npm run images   (re-run after adding new .jpg/.png photos)
// Photos are resized to at most 600 px on the longest side; the original file is removed
// once the WebP version is written. Product data refers to photos by name without extension.
import { readdir, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = new URL('../public/images/products/', import.meta.url);
const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const src = join(DIR.pathname.replace(/^\/(\w:)/, '$1'), file);
  const out = src.replace(/\.(jpe?g|png)$/i, '.webp');
  before += (await stat(src)).size;
  await sharp(src)
    .rotate()
    .resize({ width: 600, height: 600, fit: 'inside', withoutEnlargement: true })
    .flatten({ background: '#ffffff' })
    .webp({ quality: 78, effort: 6 })
    .toFile(out);
  after += (await stat(out)).size;
  await rm(src);
}
console.log(`${files.length} images: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
