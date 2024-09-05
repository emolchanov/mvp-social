FROM node:22-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

COPY . .

RUN \
  if [ -f package-lock.json ]; then npm ci; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && npm install; \
  fi


ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG gitCommit
ENV GIT_COMMIT=$gitCommit

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
# ARG NEXT_PUBLIC_API_BASE_HOST
# ENV NEXT_PUBLIC_API_BASE_HOST=${NEXT_PUBLIC_API_BASE_HOST}

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js based on the preferred package manager
RUN \
  if [ -f package-lock.json ]; then npm run build; \
  else npm build; \
  fi

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs

# Environment variables must be redefined at run time
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG gitCommit
ENV GIT_COMMIT=$gitCommit


# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]
