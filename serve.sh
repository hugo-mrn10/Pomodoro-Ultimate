#!/usr/bin/env bash
cd "$(dirname "$0")"
PORT="${1:-8080}"
echo "→ http://localhost:$PORT"
python3 -m http.server "$PORT"
