#!/bin/sh
set -eu

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL not set" >&2
  exit 1
fi

# run migrations/push first
pnpm exec drizzle-kit push

# run the seed script
pnpm exec tsx ./src/server/db/seed/index.ts
