# Endless PIP — current checks (2026-10-20)

-25 seeded10km safe-lane runs: still playing beyond10km,3hearts,66+ level changes, repeat relic pickups, no finish event, bounded row/token arrays.
- Difficulty monotonic at0/150/900/1500/3000/10000/100000/1000000m. Speed<=36, spacing>=26, row interval>.72s. Level has no cap; practical speed/spacing limits approach asymptotically.
- Input buffer, single game-over event, score/distance freeze after game over.
-4 projection checks,12 host save/lifecycle checks,4 music scheduler checks passed.
- Local895m fixture crossed902m while phase=playing,LV7.14995m fixture crossed15012m,LV101, still active. No captured direct-tab errors. These are controlled fixtures, not physical long-run playtests.
-390×844 iframe: stage374×598.92, scrollWidth=viewport390. Start/left/jump/pause worked. Existing320px layout unchanged by this update.
- PIP fur/limbs/tail and landscape inspected in WebGL. New mesh contains more detail; no claim of photorealism or measured iPhone FPS.
- Smartphone viewport emulation in the browser is unreliable here; iframe sizes are layout checks. Physical iPhone and official YouTube environment remain pending.
- Current public smoke check and deployment identifiers are recorded separately in the release record.

Previous900m completion/star checks apply only to the backed-up edition.

## Playables integration update — 2026-10-21
- SDK v1 loaded before runtime scripts. Host-only cloud save/load; normal browser retains its independent key.
- Latest-best score queue drains after an in-flight score request. Paused health warnings wait for resume; texture upload also waits for host resume.
- Host audio and language are authoritative; user mute controls are hidden in hosted mode. Game loop, interactions and music pause on SDK callbacks.
-14 host tests,4 audio tests,4 projection tests and25 seeded10km course checks passed.
- Mock SDK:129m/850 rendered callbacks stayed unchanged across separate paused observations; audio context count0 while paused/muted; host English and load-failure/retry verified.
- Official-guide CSP response header: local WebGL start/jump/pause without captured errors.
- Official suite uses the deployed URL; final result and screenshot are recorded in PLAYABLES-RESULTS.md / release record. Passing the test suite is not YouTube publication approval.
