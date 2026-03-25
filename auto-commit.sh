#!/bin/bash
cd /home/jdiveley/beyondalphagal
git add -A
if ! git diff --cached --quiet; then
  git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
  git push
fi
