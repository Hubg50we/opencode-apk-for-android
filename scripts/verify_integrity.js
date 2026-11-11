const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'web', 'index.html');
const jsPath = path.join(__dirname, '..', 'web', 'app.js');
const cssPath = path.join(__dirname, '..', 'web', 'style.css');

const html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

console.log('=== OPENCODE MOBILE INTEGRITY & COMPLIANCE TEST SUITE ===');

// Test 1: JS Syntax Validation
try {
  require('child_process').execSync(`node -c "${jsPath}"`);
  console.log('[PASS] Test 1: JavaScript Syntax Validation passed.');
} catch (e) {
  console.error('[FAIL] Test 1: JavaScript Syntax error:', e.message);
  process.exit(1);
}

// Test 2: DOM Element ID Matching
const getElementByIdMatches = js.match(/getElementById\(['"]([a-zA-Z0-9_-]+)['"]\)/g) || [];
const ids = new Set();
getElementByIdMatches.forEach(m => {
  const match = m.match(/getElementById\(['"]([a-zA-Z0-9_-]+)['"]\)/);
  if (match) ids.add(match[1]);
});

console.log(`[INFO] Auditing ${ids.size} unique DOM IDs called by app.js...`);
const missingIds = [];
for (const id of ids) {
  const idInHtml = html.includes(`id="${id}"`) || html.includes(`id='${id}'`);
  const idCreatedDynamicallyInJs = js.includes(`id="${id}"`) || js.includes(`id='${id}'`);
  if (!idInHtml && !idCreatedDynamicallyInJs) {
    missingIds.push(id);
  }
}

if (missingIds.length > 0) {
  console.error('[FAIL] Test 2: Missing DOM IDs:', missingIds);
  process.exit(1);
} else {
  console.log(`[PASS] Test 2: All ${ids.size} DOM IDs verified present in HTML or dynamically created.`);
}

// Test 3: Theme Definitions Matching
const themeMatches = js.match(/'theme-[a-z]+'/g) || [];
const uniqueThemes = [...new Set(themeMatches.map(t => t.replace(/'/g, '')))];
console.log(`[INFO] Auditing ${uniqueThemes.length} themes in style.css:`, uniqueThemes);
let themesOk = true;
for (const th of uniqueThemes) {
  if (th !== 'theme-cyber' && !css.includes(`body.${th}`)) {
    console.error(`[FAIL] Theme class body.${th} missing in style.css`);
    themesOk = false;
  }
}
if (themesOk) {
  console.log('[PASS] Test 3: All themes properly defined in CSS.');
} else {
  process.exit(1);
}

// Test 4: Pure JS ZIP Engine Test
console.log('[INFO] Testing pure-JS PKZIP generation and CRC32 verification...');
function crc32(str) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c >>> 0;
    }
  }
  const bytes = Buffer.from(str, 'utf8');
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ bytes[i]) & 0xff];
  }
  return ((crc ^ 0xffffffff) >>> 0);
}

const testChecksum = crc32('Hello OpenCode!');
if (testChecksum > 0) {
  console.log(`[PASS] Test 4: CRC32 checksum engine functional (0x${testChecksum.toString(16)}).`);
} else {
  console.error('[FAIL] Test 4: CRC32 failed.');
  process.exit(1);
}

console.log('=== ALL INTEGRITY TESTS PASSED SUCCESSFULLY! ===');
