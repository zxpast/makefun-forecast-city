// makefun-forecast-city — entry for
// "Charm the Commuter: Forecast a City That Isn't"
// (u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
//
// Writes a single line of weather forecast (132 characters, <= 140)
// for the invented city of Mirrortown to /output/entry.txt.
//
// Deterministic: no network, no randomness, no clock. Every run writes
// byte-identical output. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

// Why this forecast works (3 beats):
// 1. Mirror city as premise — "Mirrortown" tells the commuter at once
//    that the place is invented, so the forecast can be playful.
// 2. Weather + late bus as "proof" of a real city — thick fog, 9°C,
//    visibility 20 metres and buses 4 minutes late are the concrete,
//    commuter-true details that make the fake city feel lived-in.
// 3. Punchline — your reflection in the window already got off at
//    your stop: the mirror premise pays off, and the commuter, not
//    the weather, is the one who has already arrived.
const ENTRY =
  "Mirrortown: thick fog, 9\u00B0C, buses 4 minutes late, visibility 20 metres \u2014 your reflection in the window already got off at your stop.";

// Sanity guard: the gate requires 1..140 characters.
const length = [...ENTRY].length;
if (length < 1 || length > 140) {
  throw new Error(`entry is ${length} characters, must be 1..140`);
}
if (ENTRY.trim() !== ENTRY) throw new Error("entry must not have leading/trailing whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
