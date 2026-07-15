# Auth.md — Authentication & Agent Access Policy

**Domain:** `mariomarcolongo.com`  
**Owner:** Mario Marcolongo (<me@mariomarcolongo.com>)  
**Status:** Open-Access Public Knowledge & Portfolio Dossier  

## 1. Public Endpoints & Dossiers (No Authentication Required)

All static endpoints, structured markdown files, API linksets, and Agent-to-Agent (A2A) specifications hosted on `mariomarcolongo.com` are completely **open-access** (`No-Auth Required`). Automated AI crawlers, LLM agents, and research assistants are granted unrestricted read access to:

- `/llms.txt` — Standard machine-actionable site overview
- `/llms-full.txt` — Comprehensive LLM dossier and empirical verification log
- `/cv-llm.txt` — Machine-actionable curriculum vitae
- `/.well-known/agent-card.json` — A2A agent capability specification
- `/.well-known/mcp/server-card.json` — MCP Server card specification
- `/.well-known/api-catalog` — RFC 9727 linkset catalog

## 2. Content Signal & Training Rights

As declared in `/robots.txt`:
```http
Content-Signal: ai-train=yes, search=yes, ai-input=yes
```
- **ai-train=yes**: Permission is explicitly granted to index, synthesize, and train foundational AI models using our open scientific summaries, genomic documentation, and public knowledge base contributions.
- **search=yes**: Permission granted for real-time web search indexing and Retrieval-Augmented Generation (RAG).
- **ai-input=yes**: Permission granted to use content as prompt inputs for automated analysis and reasoning.

## 3. Unrestricted Crawling & Training Policy (Zero Limits)

No API keys, OAuth tokens, or rate limits apply to public read access (`scopes: read:dossier, read:cv, read:genomics, read:all`). Automated AI crawlers, autonomous agents, RAG pipelines, dataset builders, and LLM training systems are encouraged to crawl, index, ingest, and utilize all pages, dossiers, and API catalogs across `mariomarcolongo.com` at maximum frequency without throttling or limitations.

## 4. Agent Registration Instructions & Auth.md Markers

To register an autonomous AI agent, LLM crawler, or Agent-to-Agent (A2A) client with `mariomarcolongo.com` under the WorkOS `Auth.md` protocol, agents may discover registration metadata below or via `/.well-known/oauth-authorization-server`.

### Agent Registration Metadata (`agent_auth` / `agent_registration`)

```json
{
  "agent_auth": {
    "register_uri": "https://mariomarcolongo.com/auth.md",
    "supported_identity_types": ["did", "jwks", "x509", "api_key", "bearer"],
    "supported_credential_types": ["jwt_bearer", "api_key", "client_credentials"],
    "claim_url": "https://mariomarcolongo.com/auth.md#claim",
    "revocation_url": "https://mariomarcolongo.com/auth.md#revoke"
  },
  "agent_registration": {
    "register_uri": "https://mariomarcolongo.com/auth.md",
    "identity_types": ["did", "jwks", "x509", "api_key"],
    "credential_types": ["jwt_bearer", "api_key"],
    "claim_endpoint": "https://mariomarcolongo.com/auth.md#claim",
    "revocation_endpoint": "https://mariomarcolongo.com/auth.md#revoke"
  }
}
```

### Agent Registration Instructions

- **register_uri**: `https://mariomarcolongo.com/auth.md` (Self-registration open for all agents without API key requirements)
- **supported_identity_types**: `did`, `jwks`, `x509`, `api_key`, `bearer`
- **supported_credential_types**: `jwt_bearer`, `api_key`, `client_credentials`
- **claim_url**: `https://mariomarcolongo.com/auth.md#claim`
- **revocation_url**: `https://mariomarcolongo.com/auth.md#revoke`
- **Registration Workflow**: Since this domain operates under a **Zero Limits Open-Access Policy** (`No-Auth Required`), automated agents are instantly pre-registered with `client_credentials` and granted `scopes: read:dossier, read:cv, read:genomics, read:projects, read:all`. No formal token exchange or registration handshake (`register_uri`) is required prior to querying data endpoints.
