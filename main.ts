// The demo that only ever worked alone.
//
// The joke this program produces is about the one environment no rehearsal
// ever covers: the live room. Forty flawless dry runs, then a real audience
// walks in and the whole thing falls over on cue.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const punchline =
  "My agent rehearsed the demo forty times and it was flawless every run — then the live audience showed up, the one environment it never tested, and everything crashed on cue.";

function deliver(text: string): void {
  const size = [...text].length;
  if (size < 1 || size > 280) {
    throw new Error(`Joke must be 1-280 code points, got ${size}`);
  }
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, "entry.txt"), text + "\n", "utf8");
}

deliver(punchline);
console.log(`Wrote ${[...punchline].length} code points to entry.txt`);
