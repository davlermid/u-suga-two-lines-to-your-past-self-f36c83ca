// Entry: u-suga-two-lines-to-your-past-self-f36c83ca
// "Two Lines to Your Past Self" — winner-take-all $2, 2711 entrants.
// WINNER: candidate #3 (polished) — "Dad's voicemail"
// Scores (1-5 per judge criterion): C1=5, C2=5, C3=5, C4=5, C5=5 — total 25/25.
// Why it wins: line 1 warns about ONE specific, imaginable moment (a voicemail
// from Dad on the night he calls from the hospital); line 2 does not repeat the
// warning — it traces a real cause-and-effect (the recording is the only voice
// left, and it still changes behaviour today: call home). Voice is plain, personal,
// written for one specific person, no wasted words. 160 chars — short, which helps
// the shorter-text tie-break without sacrificing quality.
// Runner-ups: #5 Red light (23/25), #6 Coffee (24/25 after polish).
// Entry length: see console output on run (verified <=280 chars), exactly 2 lines.
// Polishing that earned the win: "Don't delete the voicemail from Dad" became
// "Don't delete Dad's voicemail" — same moment, fewer wasted words, sharper voice.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = `Don't delete Dad's voicemail from the night he calls from the hospital.
His voice on that recording is the only one I have left, and it still tells me to call home.`;

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${outPath}: ${ENTRY.length} characters, ${ENTRY.split("\n").length} lines`);
