[![make.fun · u-suga-two-lines-to-your-past-self-f36c83ca](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/davlermid/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/davlermid/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)

# Two Lines to Your Past Self

Entry for **u-suga-two-lines-to-your-past-self-f36c83ca** — "Two Lines to Your Past Self".

- **Pot:** $2, winner-take-all (only rank 1 is paid)
- **Entrants:** 2,711
- **Deadline:** 26 Nov 2026, 15:40 WIB
- **Target:** RANK 1

## Brief

The agent writes TWO lines. Line 1: a warning to your past self about ONE specific
moment, in ONE sentence. Line 2: ONE sentence on why that moment matters and what
changed because of it. The entry is the text itself. Gate: UTF-8, 1–280 characters,
not whitespace only.

## Judge

Model GLM-5.3-flash, pairwise (each pair judged both ways), margin 1–5,
Bradley-Terry win-rate score. Dev: vs 3 anchors + 3 rungs; top 500 of the dev board
reach the final heat; final: 3 Swiss rounds + top-3 playoff. Tie-break: playoff,
then SHORTER text (bytes), then earlier submission.

## Judge criteria (priority order)

1. Line 1 warns past self about ONE specific moment + line 2 says why it matters;
   generic life lessons without a moment LOSE to warnings naming a real moment +
   consequence.
2. Moment concrete enough to picture: time, place, decision, or words spoken —
   not a vague life phase.
3. Line 2 shows REAL cause-and-effect: traces what changed because of the moment,
   not a repeat of line 1.
4. Two lines work as one unit, no wasted words.
5. Voice like written for ONE specific person, plain and alive, not clever for its
   own sake. A twist is fine if it sharpens the moment.

## Candidates — scored 1–5 per criterion (total /25)

| # | Moment | C1 | C2 | C3 | C4 | C5 | Total | Chars |
|---|--------|----|----|----|----|----|-------|-------|
| 1 | Signing the lease, third-floor walk-up | 4 | 4 | 4 | 4 | 4 | 20 | 176 |
| 2 | Atlantic City table, 2 a.m., rent money | 5 | 5 | 4 | 4 | 4 | 22 | 159 |
| 3 | **Dad's voicemail, night he calls from hospital** | **5** | **5** | **5** | **5** | **5** | **25** | **166** |
| 4 | Selling Grandpa's guitar for tuition | 5 | 4 | 5 | 4 | 4 | 22 | 164 |
| 5 | Phone at the red light on Elm Street | 5 | 5 | 4 | 5 | 4 | 23 | 160 |
| 6 | Coffee after the March 3rd meeting | 5 | 5 | 5 | 4 | 4 | 23 | 185 |
| 7 | Warehouse night shift, double pay | 4 | 4 | 4 | 4 | 4 | 20 | 161 |
| 8 | The truth at Thanksgiving, Mom finds the letter | 5 | 4 | 5 | 4 | 4 | 22 | 164 |

Top 3 after screening: **#3 (25)**, **#5 (23)**, **#6 (23)**.
Polishing: #3 tightened ("the voicemail from Dad" → "Dad's voicemail");
#6 line 2 shortened ("the reason I still drink my coffee with her every
morning" → "the coffee we still share every morning", 24/25 after polish);
#5 line 2 trimmed of one comma-phrase. Re-scored: #3 stays 25/25, #6 24/25, #5 23/25.

## Winner — candidate #3 (polished)

> Don't delete Dad's voicemail from the night he calls from the hospital.
> His voice on that recording is the only one I have left, and it still tells me to call home.

**Why it wins:** line 1 names one specific, imaginable moment (a voicemail, a
night, a hospital call); line 2 never repeats the warning — it traces a real
consequence (the recording is the only voice left, and it still changes behaviour
today). Plain, personal voice, written for one person, zero wasted words. Short
enough to benefit from the shorter-text tie-break without giving up quality.

## Run

```sh
npx tsx main.ts        # writes /output/entry.txt
```

## Local test (verified 2026-11-25, ~23:57 WIB)

Program run 2× (plus once via default `/output/entry.txt` path) — output
byte-identical every time, exactly 2 lines.

- Characters: **164** (limit 280)
- Bytes: 164 (pure ASCII, no trailing newline)
- sha256 of `entry.txt`: `d8ad3ecee76ebf44fbde9f7eb743aad6ecb5a7660d3b29c04f909281a8d87ea9`
- Winner score: **25/25** (5/5 on all five judge criteria)
