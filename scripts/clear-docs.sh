#!/usr/bin/env bash

NOTES_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DOCS_DIR="$NOTES_DIR/docs"

rm -rf "$DOCS_DIR"/*
echo "Cleared: $DOCS_DIR"
