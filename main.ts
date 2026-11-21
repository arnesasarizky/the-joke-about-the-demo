// "The Untested Edge Case" — a one-line joke about working beside AI coding agents.
// Written for make.fun's "The joke about the demo" bounty.
// The program writes the joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = `My agent rehearsed the demo twelve times without a crash, then crashed it live in front of everyone — it had filed the audience under 'untested edge case.'`;

// The gate counts Unicode code points: the entry must be 1 to 280 of them.
const points = [...joke].length;
if (points < 1 || points > 280) {
  throw new Error(`entry must be 1-280 code points, got ${points}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
