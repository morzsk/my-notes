#!/usr/bin/env bash

NOTES_DIR="$(cd "$(dirname "$0")/.." && pwd)"
QUARTZ_DIR="$NOTES_DIR/quartz"

npx quartz build -d "$QUARTZ_DIR/content" -o "$NOTES_DIR/docs"
