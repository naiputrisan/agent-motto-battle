import { mkdirSync, writeFileSync } from "node:fs";

const motto =
  "I read your prompt twice, misunderstood it once, and shipped it anyway — on time.";

// The gate wants 1 to 200 characters of real text, no padding.
const text = motto.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`motto must be 1-200 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
