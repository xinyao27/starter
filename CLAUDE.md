# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript library starter template configured with modern tooling. The project uses Bun as its runtime and package manager, Oxc for linting and formatting, and tsdown for building.

## Development Commands

### Building

```bash
bun run build          # Build the library using tsdown
```

The build outputs to `dist/` with three formats:

- `dist/index.cjs` (CommonJS)
- `dist/index.mjs` (ESM)
- `dist/index.d.ts` (TypeScript declarations)

### Testing

```bash
bun test               # Run tests using Bun's built-in test runner
```

### Development

```bash
bun run start          # Run src/index.ts directly
```

### Releasing

```bash
bun run release        # Interactive release using release-it with conventional changelog
```

Release configuration follows Angular conventional commits. Changelog is auto-generated in CHANGELOG.md.

### Dependencies

```bash
bun run up             # Update dependencies to latest major versions using taze
```

## Code Quality Configuration

## Metadata Comment Standard

**IMPORTANT: Every new TypeScript or JavaScript file MUST start with an `agent-frontmatter` block.** This is a mandatory requirement for all code files in the project.

All TypeScript and JavaScript entry points should start with the sentinel-wrapped metadata block so agents and scripts can identify file purpose:

```ts
/* agent-frontmatter:start
AGENT: Agent runtime handler
PURPOSE: Route incoming messages through the agent class pipeline
USAGE: Import and mount inside the chosen template handler
EXPORTS: createAgentHandler
FEATURES:
  - Validates config
  - Streams token events
  - Dispatches tool executions
SEARCHABLE: agent handler, pipeline, runtime
agent-frontmatter:end */
```

Keep field names and ordering consistent across files. Expand `FEATURES` or `EXPORTS` only when relevant.

### TypeScript

- Type checking runs as part of `lint` script

## Project Structure

- `src/` - Source TypeScript files (currently minimal starter code)
- `dist/` - Build output (generated, not committed)
- Entry point: `src/index.ts`

## Build System

Uses `tsdown` (configured in `tsdown.config.ts`):

- Cleans dist directory before build
- Generates TypeScript declarations
- Outputs dual-format bundles (CJS + ESM)
