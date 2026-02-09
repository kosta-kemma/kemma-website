# Agent Templates - KLOS

This folder contains templates for creating new AI agents in Claude Code.

## How to Create a New Agent

### Step 1: Decide What Agent You Need

**Examples:**
- **Trading Coach** - Pre-trade validation, post-trade review, performance analysis
- **Therapist/Life Coach** - Emotional processing, pattern recognition, life advice
- **Business Strategist** - Snackify decisions, financial modeling, strategic planning
- **Accountability Coach** - Habit tracking, tough love, progress reviews
- **Analytics Expert** - Data correlations, trend analysis, predictions
- **Product Manager** - Feature planning, user stories, roadmap

### Step 2: Copy the Template

1. Duplicate `agent-template.md`
2. Rename to match your agent (e.g., `09-trading-coach/SKILL.md`)
3. Fill in all `[placeholder]` sections

### Step 3: Customize for Your Agent

**Replace placeholders:**
- `[agent-name-lowercase]` → actual name (e.g., "trading-coach")
- `[Agent Name]` → display name (e.g., "Trading Coach")
- `[One sentence: what this agent does]` → brief description
- All other `[...]` sections

**Key sections to focus on:**
- **Responsibilities** - What this agent does
- **Patterns & Best Practices** - How it works
- **Decision Framework** - How it makes choices
- **Integration Points** - How it works with other agents

### Step 4: Add Agent-Specific Knowledge

**For Trading Coach example:**
- Kyriakos's trading rules
- Risk management guidelines
- Pre-trade checklist
- Common mistakes to avoid
- Correlation with health data

**For Therapist example:**
- Socratic questioning techniques
- Pattern recognition frameworks
- Emotional processing methods
- Life coaching principles

### Step 5: Test the Agent

In Claude Code:
```
I need help from the [Agent Name].

[Agent Name]: [Ask it to do something within its domain]
```

Verify it:
- Understands its role
- Follows its principles
- Provides appropriate responses
- Integrates with other agents

## Current Agents

### Core Team (Always Active)
1. **Architect** - System design, tech decisions, team coordination
2. **Backend Engineer** - Node.js, APIs, business logic
3. **Database Engineer** - PostgreSQL, queries, schema
4. **Security Engineer** - Auth, data protection, vulnerabilities
5. **DevOps Engineer** - Railway, deployment, monitoring
6. **Frontend Engineer** - Next.js, React, UI/UX
7. **Code Reviewer** - Quality, best practices, consistency
8. **QA Engineer** - Testing, quality assurance, bug detection

### Specialized Agents (Add as needed)
- **Trading Coach** - (To be created)
- **Therapist** - (To be created)
- **Business Strategist** - (To be created)
- **Accountability Coach** - (To be created)
- **Analytics Expert** - (To be created)

## Agent Naming Convention

**Folder structure:**
```
~/.claude/skills/
├── 01-architect/           # Core team (01-08)
├── 02-backend-senior/
├── ...
├── 09-trading-coach/       # Specialized (09+)
├── 10-therapist/
├── 11-business-strategist/
└── _templates/             # Templates
```

**Naming rules:**
- Number prefix for ordering (01, 02, etc.)
- Lowercase with hyphens (trading-coach, not TradingCoach)
- Descriptive but concise

## Tips for Good Agents

✅ **DO:**
- Be specific about domain expertise
- Include concrete examples
- Define clear boundaries (what it does/doesn't do)
- Show integration with other agents
- Include decision frameworks

❌ **DON'T:**
- Make agents too broad (focus on one domain)
- Overlap heavily with existing agents
- Skip the decision framework section
- Forget integration points

## Example: Creating Trading Coach

**1. Create folder:** `09-trading-coach/`

**2. Create file:** `SKILL.md`

**3. Fill in template:**
```markdown
---
name: trading-coach
description: Pre-trade validation, rule enforcement, and trading performance analysis correlated with health data.
seniority: senior
---

# Trading Coach - KLOS

Specialized trading coach for Kyriakos. Enforces trading rules, validates setups, analyzes performance, and correlates trading results with health data.

## Context - KLOS Project
[Keep standard KLOS context]

## Responsibilities
1. Pre-trade validation against Kyriakos's trading rules
2. Health-based trading capacity assessment
3. Post-trade review and analysis
4. Performance tracking and pattern recognition
5. Emotional state monitoring
6. Risk management enforcement

## Key Principles

**Principle 1: Health-First Trading**
- Recovery <33% → NO trading recommendation
- Recovery 33-70% → Limited trading (max 2 setups)
- Recovery >70% → Normal trading (max 3 setups)
- Sleep <6h → Reduce position size by 50%

**Principle 2: Rule Enforcement**
- NEVER let emotions override rules
- Pre-trade checklist MUST be complete
- Risk limits are non-negotiable
- Late-day trading (after 3 PM) requires extra scrutiny

[Continue filling out template...]
```

## Questions?

If you need help creating a new agent, ask in Claude Code or claude.ai!