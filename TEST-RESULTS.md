# Expedition01 validation — 2026-10-20

## Automated

expedition-tests.cjs:100 seeded900m routes reached the terminal win state, collected all3 relics and retained3 hearts using safe lanes; checked every generated row has an open lane, finish triggers only once, scoring freezes after completion, missed relics remain missing, jump buffering works, and speed/spacing remain bounded. Production retries use fixed seed20261020 to make the first course learnable.

host-tests.cjs:12 checks pass, including startup/retry, malformed cloud records, no hosted local storage, authoritative host mute/pause/resume, queued saves, persisted integer distance score, independent browser key and expedition stars/relics/clears validation/restore.

music-tests.cjs:4 checks pass (no autoplay context before gesture, one scheduler, mute, pending-resume cancellation).

render-tests.cjs:4 checks pass (camera perspective, lane projection, origin mapping, portrait/landscape matrices).

## Browser UI and visuals

Actual start, left movement, jump, pause/resume controls checked. Japanese/English hints and interface implemented. A local integration fixture starting at895m verified the actual game reached900m, displayed the complete panel and3 stars with3 relics/35 coins. This is an integration fixture, not a manual full-course playthrough. Records are isolated to the localhost origin during QA.

All3 regional render snapshots reviewed, including textured masonry, alpha-cutout foliage, animated waterfall material and final temple. Material readiness true, no captured game script/shader errors in direct preview. Cached normal-frame scene generation measured7.6–9.6ms in the test PC browser; first-time generation is slower. This is CPU scene timing, not GPU frame rate or iPhone performance. GPU-retained scenery and sphere templates reduce repeated work; low-power mode reduces canopy layers and scene density.

Responsive iframe fixture without the host SDK used390/320px frame widths; document scrollWidth matched clientWidth375/305px after the desktop scrollbar, with no horizontal overflow. Buttons, jump and pause worked in the small frame. The generic iframe plus official SDK attempted host communication, so that fixture deliberately omits the SDK; actual hosted lifecycle uses the separate mock tests. Browser viewport override was ineffective on this host; no false claim of device emulation is made.

## Remaining owner/platform validation

Physical iPhone Safari GPU performance, actual touch chaining feel, audible music balance, app switching and official Playables SDK suite/certification for this edition remain to be checked. Existing v2.4 official-suite results do not certify this new edition. No claim of commercial-game equivalence or YouTube approval.

## Scope and packaging

Independent repository sky-ruins-expedition-test, browser key sky_ruins_expedition_v1. Existing sky-ruins-run-3d-test and all other games are unchanged. Runtime distribution excludes local QA fixtures, old endless-mode tests and source PNGs. Includes only production files, two optimized original image assets and useful documentation/tests.
