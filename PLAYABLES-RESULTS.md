# PIP Endless — YouTube Playables preparation

Checked2026-10-21. Independent test project only; original public games are unchanged.

## Implemented and checked

- SDK v1 precedes runtime code. firstFrameReady on loading screen; gameReady after data, locale and textures are ready.
- Cloud-only persistence when hosted, load-before-save, legacy record validation, retry without overwriting on load failure.
- Integer best distance (metres) is the single leaderboard dimension, matching saved BEST. Latest persisted best is drained after an in-flight score request.
- SDK pause/resume stops loop, audio and input. Optional warning calls and texture uploads wait for resume. Pause progress save remains enabled.
- SDK language and audio controls; no browser visibility event handling or localStorage for hosted progress.
-14 adapter unit checks,4 audio checks,4 projection checks,25 seeded10km engine checks passed.
- Current mock UI: pause frozen at129m/850 frames across separate observations; contexts0 while paused/muted, resume and English locale verified; failed cloud load shows retry and then restores.
- Local page served with the official-guide CSP starts WebGL, jumps and pauses without captured console errors.

## Official suite

The preceding public endless3 build was loaded by the official suite: SDK order/readiness, initial bundle2.26MiB and heap26.99MiB checks passed. Current playables4 build must be rechecked after deployment. Final measured result and screenshot are recorded in the local SKY-RUINS-EXPEDITION-release.md record.

This is integration preparation, not certification or permission to publish on YouTube. Partner access, final gameplay/device/performance review and YouTube approval remain separate. iPhone browser play of the preceding endless build was confirmed by the owner; new SDK host behavior cannot be verified by normal Safari alone.

## Files and next steps

Runtime ZIP: SKY-RUINS-ENDLESS-PLAYABLES-04.zip (index.html at root, only10 runtime files). Backup: SKY-RUINS-ENDLESS-before-SDK.zip. Simulation and local test fixtures are excluded.

After partner access: upload runtime ZIP in the authorized developer portal, run official test suite against that build, verify touch/audio/lifecycle on iPhone and Android inside YouTube, then submit for review. The interest form and other games were not changed here.

Sources checked:
- https://developers.google.com/youtube/gaming/playables/certification/requirements_integration
- https://developers.google.com/youtube/gaming/playables/reference/sdk
- https://developers.google.com/youtube/gaming/playables/reference/test_suite_guide
