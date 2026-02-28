import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const manifestPath = path.join(projectRoot, "assets-manifest.json");

const manifestRaw = await readFile(manifestPath, "utf8");
const manifest = JSON.parse(manifestRaw.replace(/^\uFEFF/, ""));

if (!Array.isArray(manifest.assets)) {
  throw new Error("Invalid assets manifest: expected an assets array.");
}

for (const asset of manifest.assets) {
  if (!asset.sourceUrl || !asset.localPath) {
    throw new Error(`Invalid asset entry: ${JSON.stringify(asset)}`);
  }

  const outputPath = path.join(projectRoot, asset.localPath);
  await mkdir(path.dirname(outputPath), { recursive: true });

  const response = await fetch(asset.sourceUrl);
  if (!response.ok) {
    throw new Error(`Failed to download ${asset.sourceUrl}: ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await writeFile(outputPath, buffer);
  console.log(`Downloaded ${asset.sourceUrl} -> ${asset.localPath}`);
}

console.log("Asset fetch completed.");
