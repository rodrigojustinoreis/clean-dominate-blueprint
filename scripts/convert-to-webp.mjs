import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = "src/assets";
const MIN_SIZE = 50 * 1024; // só converte arquivos > 50KB

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImages(full)));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      const { size } = await stat(full);
      if (size >= MIN_SIZE) files.push(full);
    }
  }
  return files;
}

const images = await getImages(ASSETS_DIR);
let totalBefore = 0;
let totalAfter = 0;

for (const img of images) {
  const ext = extname(img);
  const webpPath = img.replace(new RegExp(ext + "$", "i"), ".webp");
  const { size: before } = await stat(img);

  await sharp(img)
    .webp({ quality: 85 })
    .toFile(webpPath);

  const { size: after } = await stat(webpPath);
  totalBefore += before;
  totalAfter += after;

  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(`✓ ${basename(webpPath)}  ${(before/1024/1024).toFixed(2)}MB → ${(after/1024/1024).toFixed(2)}MB  (-${saved}%)`);

  // remove original
  await unlink(img);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB  (-${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(0)}%)`);
