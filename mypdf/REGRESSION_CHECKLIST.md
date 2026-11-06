# mypdf regression checklist (run before every release)

Version under test: __________    Commit: __________    Tester/device: __________

## Open, display and navigation
- [ ] Open a normal multi-page PDF on desktop; no console errors.
- [ ] Open a PDF on an actual iPhone Safari (or explicitly mark simulation only).
- [ ] Zoom in/out and Fit; PDF content and overlay stay aligned.
- [ ] Search source text, navigate next/previous match, switch pages.
- [ ] Print a PDF; UI stays usable.

## Touch and editing — high priority
- [ ] Select **Text** and tap near all four corners; text starts at the tapped document position.
- [ ] Tap a **small table cell**; typed text stays in that cell with no added offset.
- [ ] Type into two **adjacent cells**; second tap creates distinct text, not selection of the first.
- [ ] On iPhone, 16px floating keyboard field and actual-size on-page preview agree on **saved PDF placement**.
- [ ] Reopen user-added text, change it, move it, and adjust **A− / A+** and 2px arrow nudges.
- [ ] Zoom after placement; annotation remains anchored at the same document coordinate.
- [ ] Draw, highlight, cover, box, sign and insert an image; selection, move and resize work.
- [ ] Replace selectable PDF text visually; the original PDF content is not represented as securely redacted.
- [ ] Undo/redo text and drawing; dirty state and selection stay consistent.

## Page operations
- [ ] Add a blank page; merge another PDF; duplicate a page.
- [ ] Move/reorder, delete, and rotate a page; other pages unchanged.
- [ ] Annotations remain in the correct location after 90°, 180°, 270° rotation, then export.

## Export and privacy
- [ ] Save the edited PDF and **reopen it in a separate viewer**.
- [ ] Compare preview and exported text placements in small cells (target: visually within a few screen pixels at the same scale).
- [ ] Confirm annotations and original pages are present and no blank/shifted overlays appeared.
- [ ] Confirm local PDF bytes are not sent to an application backend. CDN requests for scripts are separate.
- [ ] If a previous test fails, stop deployment and investigate impact before merging.

## Change review
- [ ] Explicit list of modified functions and dependent behaviors.
- [ ] Previous behaviors reviewed and preserved; no unwanted architecture or library version changes.
- [ ] New failing scenario has a regression test or a documented manual reproduction.
- [ ] Tested desktop browser and iPhone Safari, or limitations disclosed.
- [ ] `ARCHITECTURE.md` and this checklist updated if dependencies/behavior changed.
