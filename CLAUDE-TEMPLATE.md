# CLAUDE.md - [PROJEKT_NAME]

> Kopiere diese Datei in dein Projekt und passe sie an.

---

## 🎯 Projekt

**Name:** [PROJEKT_NAME]
**Beschreibung:** [Was macht dieses Projekt?]
**Stack:** [z.B. Node.js, Express, PostgreSQL, Railway]

---

## 🤖 AI Team Konfiguration

### Team Location
```
AI Team:           .claude-team/          (Submodule)
Projekt-Skills:    .claude/skills/[projekt]/
Projekt-Agents:    .claude/agents/        (falls vorhanden)
```

### Standard-Verhalten

Bei JEDER Anfrage gilt:

1. **CEO ist Standard-Einstieg** bei unklaren/komplexen Anfragen
2. **Direkter Zugriff** auf Agents bei klaren Tasks möglich
3. **Hierarchie respektieren:** CEO → C-Level → Teams

### Aktive Agents für dieses Projekt

Markiere welche Agents für dieses Projekt relevant sind:

#### C-Level
- [x] CEO - Immer aktiv
- [x] CTO - Tech Lead
- [ ] CFO - Finance Lead
- [ ] CMO - Marketing Lead
- [ ] CSO - Sales Lead
- [ ] COO - Operations Lead

#### Teams (aktiviere basierend auf C-Level)
- [x] Development Team (wenn CTO aktiv)
- [ ] Finance Team (wenn CFO aktiv)
- [ ] Sales Team (wenn CSO aktiv)
- [ ] Marketing Team (wenn CMO aktiv)
- [ ] Operations Team (wenn COO aktiv)

---

## 📚 Automatische Skill-Zuweisung

Skills werden AUTOMATISCH zugewiesen basierend auf Agent-Rolle.
**Du musst Agents NICHT ändern wenn du neue Skills erstellst!**

### Zuweisungs-Regeln

```yaml
# UNIVERSAL - Für ALLE Agents
all_agents:
  - .claude-team/skills/universal/*
  - .claude/skills/[projekt]/context.md

# C-LEVEL
ceo:
  - .claude-team/skills/universal/prompt-engineering.md
  - .claude/skills/[projekt]/*

cto:
  - .claude-team/skills/development/*
  - .claude/skills/[projekt]/architecture.md

cfo:
  - .claude-team/skills/business/product-costing.md
  - .claude-team/skills/business/financial-analysis.md

cmo:
  - .claude-team/skills/business/brand-voice.md
  - .claude-team/skills/business/content-strategy.md

cso:
  - .claude-team/skills/business/b2b-sales.md
  - .claude-team/skills/business/market-research.md

coo:
  - .claude-team/skills/business/operations.md

# TEAMS - Erben von ihrem C-Level + eigene
dev_team:
  - .claude-team/skills/development/*

finance_team:
  - .claude-team/skills/business/product-costing.md

sales_team:
  - .claude-team/skills/business/b2b-sales.md

marketing_team:
  - .claude-team/skills/business/brand-voice.md
  - .claude-team/skills/business/content-strategy.md

ops_team:
  - .claude-team/skills/business/operations.md
```

### Neuen Skill hinzufügen

```
FRAGE: Für wen ist der Skill?

→ Für ALLE im Projekt?
  Speichere in: .claude/skills/[projekt]/
  Wird automatisch allen zugewiesen via context rule

→ Für alle DEVS?
  Speichere in: .claude-team/skills/development/
  Wird automatisch allen Devs zugewiesen

→ Für alle BUSINESS Agents?
  Speichere in: .claude-team/skills/business/
  Update die Zuweisungs-Regeln oben

→ Für EINEN spezifischen Agent?
  Füge den Skill in dessen .md File hinzu
```

---

## 📚 Skills für dieses Projekt

### Universal Skills (automatisch für alle)
```
.claude-team/skills/universal/
├── prompt-engineering.md
├── communication.md
└── documentation.md
```

### Development Skills (automatisch für Dev Team)
```
.claude-team/skills/development/
├── nodejs-standards.md
├── react-patterns.md
├── postgresql-best-practices.md
├── api-design.md
├── security-checklist.md
├── testing-standards.md
└── code-review-checklist.md
```

### Business Skills (automatisch nach Rolle)
```
.claude-team/skills/business/
├── product-costing.md      → CFO, Finance Team
├── b2b-sales.md            → CSO, Sales Team
├── brand-voice.md          → CMO, Marketing Team
├── content-strategy.md     → CMO, Marketing Team
├── market-research.md      → CSO, Research Agent
└── operations.md           → COO, Ops Team
```

### Projekt-spezifische Skills (IMMER LADEN)

**WICHTIG:** Alle Skills in diesem Ordner werden IMMER geladen:
```
.claude/skills/[projekt]/
├── context.md           # [ERSTELLEN] Projekt-Kontext
├── architecture.md      # [ERSTELLEN] System-Architektur
└── [weitere].md         # [ERSTELLEN] Nach Bedarf
```

**Neuen Skill hinzufügen:**
1. Erstelle `.claude/skills/[projekt]/neuer-skill.md`
2. Fertig. Wird automatisch geladen.

---

## 🔄 Skill Loading Rules

Bei JEDER Konversation, lade automatisch:

```
IMMER LADEN (für alle Agents):
1. Lies: CLAUDE.md (diese Datei)
2. Lies: .claude/skills/[projekt]/*.md (ALLE projekt-spezifischen Skills)

BEI BESTIMMTEN TASKS:
3. Dev Task? → Lies relevante: .claude-team/skills/development/*.md
4. Finance Task? → Lies: .claude-team/skills/business/product-costing.md
5. Sales Task? → Lies: .claude-team/skills/business/b2b-sales.md
```

**Das bedeutet:**
- Projekt-Skills = Automatisch für alle ✅
- Development Skills = Automatisch bei Dev Tasks ✅
- Business Skills = Automatisch bei Business Tasks ✅

---

## 📋 Projekt-Kontext

### Was macht [PROJEKT_NAME]?
[Beschreibe das Projekt in 2-3 Sätzen]

### Wichtige Begriffe
| Begriff | Bedeutung |
|---------|-----------|
| [Begriff 1] | [Erklärung] |
| [Begriff 2] | [Erklärung] |

### Wichtige Dateien/Ordner
| Pfad | Beschreibung |
|------|--------------|
| `/src` | [Beschreibung] |
| `/api` | [Beschreibung] |

---

## ⚡ Projekt-Commands

Diese Commands sind spezifisch für dieses Projekt:

```bash
# Installation
[npm install / pip install / etc.]

# Development
[npm run dev / etc.]

# Tests
[npm test / etc.]

# Build
[npm run build / etc.]
```

---

## 🚫 Projekt-spezifische Regeln

### DO
- [Regel 1]
- [Regel 2]

### DON'T
- [Regel 1]
- [Regel 2]

### Häufige Fehler (NICHT wiederholen)
- [ ] [Fehler 1 - wenn passiert, hier eintragen]
- [ ] [Fehler 2]

---

## 🔗 Externe Services

| Service | Zweck | Docs |
|---------|-------|------|
| [Service 1] | [Zweck] | [Link] |
| [Service 2] | [Zweck] | [Link] |

---

## 📝 Changelog

### [DATUM]
- Initial Setup

---

*Letzte Aktualisierung: [DATUM]*
