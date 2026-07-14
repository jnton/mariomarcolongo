#!/usr/bin/env node
/**
 * Automated LLM & AI Dossier Generator
 * Compiles single source of truth (`data/source.js`) into standard AI-compatible Markdown files.
 */

const { buildDossiers } = require('./build.js');

buildDossiers();
