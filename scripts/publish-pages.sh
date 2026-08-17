#!/usr/bin/env bash
# Publish frontend/dist to the gh-pages branch (root of the site).
# Run after the Vite build (with --base=/sluice/).
# Uses a throwaway temp git repo so we don't disturb the working tree.
set -euo pipefail

DIST="frontend/dist"
REPO_URL="$(git config --get remote.origin.url)"

if [ ! -d "$DIST" ]; then
  echo "ERROR: $DIST not found. Run the build first." >&2
  exit 1
fi

# SPA fallback: GitHub Pages 404s on deep links (/firewall, /how). Copy index.
cp "$DIST/index.html" "$DIST/404.html"
# Disable Jekyll so asset filenames with underscores are left untouched.
touch "$DIST/.nojekyll"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
cp -r "$DIST"/. "$TMP"/

cd "$TMP"
git init -q
git checkout -q -b gh-pages
git config user.email "tajudeenowoeteniyan@gmail.com"
git config user.name "Tajudeen isah"
git add -A
git commit -q -m "Deploy Sluice frontend $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f -q "$REPO_URL" gh-pages
echo "Pushed gh-pages -> $REPO_URL"
