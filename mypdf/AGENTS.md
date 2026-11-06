# mypdf — instructions for future coding agents

This file applies to all changes inside \`mypdf/\`.

**Before implementing a new requirement:** inspect the existing implementation, identify affected functions and dependent functionality, and explain conflicts with established requirements. Preserve all unrelated behavior. Do not change architecture, remove features, or introduce breaking changes without explicit approval. Run existing and new tests before requesting a merge.

1. Read \`ARCHITECTURE.md\` and \`REGRESSION_CHECKLIST.md\` first. As of v1.2.0, the app is ONE \`index.html\` with embedded CSS and JavaScript, not already modular.
2. Never replace \`index.html\` with a simplified app just to add one requested feature. Use the minimum targeted edit and review the exact diff.
3. Preserve: PDF open/read/zoom/search/print; text tap-to-type, inline revisions, tight-cell placement, fine arrow nudging and sizing; highlight, drawing, boxes, cover, signatures, images, page management, undo/redo, save; iPhone, iPad and desktop behavior.
4. **Critical contract:** touch event coordinates become normalized 0..1 page coordinates in \`mapPointer()\`. Verify \`renderPage()\`, \`pageViewport\`, \`positionInlineEditor()\`, \`drawMarks()\`, \`pngForAnnotations()\` and \`placeOverlayOnPdf()\` stay aligned. Do not mix CSS pixels with canvas backing pixels (DPR) or move content based on keyboard placement.
5. Source PDF content is copied intact; editable overlay annotations are flattened on save. A white cover is not secure redaction, and replacing displayed text is not modifying PDF source text.
6. Preserve page/source associations, rotations, and \`remember()\`/undo history for edits. Always settle inline edits before switching pages or exporting.
7. Keep the GitHub Pages URL path \`/Additon/mypdf/\` and all neighboring \`Additon\` site content unchanged.
8. Before release, test real PDFs; perform iPhone Safari narrow-cell tap/position tests (including adjacent cells), zoom, nudge, save/reopen, multiple pages, rotation, and existing editing tools. Don't claim real-device testing based solely on emulation.
9. On failure, don't ship. On success, update the architecture map and regression checklist when behavior or dependencies change; cite the test evidence in the PR.

This is a behavioral guardrail, **not** a substitute for automated checks or a guarantee against regressions.
