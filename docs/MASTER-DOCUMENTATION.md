# 🏢 Claude AI Team - Master Documentation

> Ein virtuelles Unternehmen mit AI Agents das mit dir denkt, diskutiert und arbeitet.

---

## 📖 Inhaltsverzeichnis

1. [Vision & Konzept](#vision--konzept)
2. [Architektur](#architektur)
3. [Agents & Hierarchie](#agents--hierarchie)
4. [Skills System](#skills-system)
5. [Commands & Workflows](#commands--workflows)
6. [Kosten-Optimierung](#kosten-optimierung)
7. [Projekt-Integration](#projekt-integration)
8. [Hiring Process](#hiring-process)
9. [Best Practices](#best-practices)

---

## 🎯 Vision & Konzept

### Was ist das?

Ein **virtuelles Unternehmen** bestehend aus AI Agents, das:

- **Sparring Partner** ist - Du kannst mit Agents brainstormen und diskutieren
- **Tasks ausführt** - Agents erledigen echte Arbeit (Code, Kalkulationen, Content)
- **Verschiedene Perspektiven** bietet - CFO denkt anders als CTO
- **Wiederverwendbar** ist - Ein System für alle deine Projekte

### Das Kern-Prinzip

```
DU redest wie du willst
        ↓
CEO versteht & optimiert (Prompt Engineering)
        ↓
C-Level plant & delegiert
        ↓
Teams führen aus
        ↓
Sauberer Output an DICH
```

### Zwei Modi pro Agent

| Modus | Beschreibung | Beispiel |
|-------|--------------|----------|
| **Sparring** | Diskutieren, Brainstormen, Challengen | "Hey CSO, wie wachsen wir?" |
| **Execution** | Aufgaben erledigen, Outputs produzieren | "CSO, erstell Outreach Templates" |

---

## 🏗️ Architektur

### Repository Struktur

```
claude-ai-team/                    ← ZENTRALES REPO (für alle Projekte)
│
├── README.md                      # Übersicht
├── CLAUDE.md                      # Master-Konfiguration Template
├── CHANGELOG.md                   # Alle Änderungen dokumentiert
│
├── agents/
│   │
│   │ # C-LEVEL (Orchestratoren + Sparring Partner)
│   ├── ceo.md                     # CEO & Prompt Engineer
│   ├── cto.md                     # Chief Technology Officer
│   ├── cfo.md                     # Chief Financial Officer
│   ├── cmo.md                     # Chief Marketing Officer
│   ├── cso.md                     # Chief Sales Officer
│   └── coo.md                     # Chief Operations Officer
│   │
│   │ # DEVELOPMENT TEAM (unter CTO)
│   ├── dev/
│   │   ├── senior-developer.md
│   │   ├── backend-developer.md
│   │   ├── frontend-developer.md
│   │   ├── ui-designer.md
│   │   ├── security-engineer.md
│   │   ├── junior-developer.md
│   │   ├── code-reviewer.md
│   │   └── qa-engineer.md
│   │
│   │ # FINANCE TEAM (unter CFO)
│   ├── finance/
│   │   ├── financial-analyst.md
│   │   └── accountant.md
│   │
│   │ # SALES TEAM (unter CSO)
│   ├── sales/
│   │   ├── sales-strategist.md
│   │   ├── lead-generator.md
│   │   └── research-agent.md
│   │
│   │ # MARKETING TEAM (unter CMO)
│   ├── marketing/
│   │   ├── content-creator.md
│   │   ├── copywriter.md
│   │   └── social-media-manager.md
│   │
│   │ # OPERATIONS TEAM (unter COO)
│   └── operations/
│       ├── ops-manager.md
│       └── process-optimizer.md
│
├── skills/
│   │
│   │ # UNIVERSAL (für alle Projekte)
│   ├── universal/
│   │   ├── prompt-engineering.md
│   │   ├── communication.md
│   │   └── documentation.md
│   │
│   │ # DEVELOPMENT
│   ├── development/
│   │   ├── nodejs-standards.md
│   │   ├── react-patterns.md
│   │   ├── postgresql-best-practices.md
│   │   ├── api-design.md
│   │   ├── security-checklist.md
│   │   ├── testing-standards.md
│   │   └── code-review-checklist.md
│   │
│   │ # BUSINESS
│   └── business/
│       ├── product-costing.md
│       ├── financial-analysis.md
│       ├── b2b-sales.md
│       ├── outreach-templates.md
│       ├── brand-voice.md
│       ├── content-strategy.md
│       └── market-research.md
│
├── commands/
│   ├── hire-agent.md              # Neuen Agent erstellen
│   ├── create-skill.md            # Neuen Skill erstellen
│   ├── daily-standup.md           # Team Status
│   ├── commit-push-pr.md          # Git Workflow
│   └── plan-feature.md            # Feature planen
│
├── templates/
│   ├── agent-template.md          # Vorlage für neue Agents
│   ├── skill-template.md          # Vorlage für neue Skills
│   └── command-template.md        # Vorlage für neue Commands
│
└── docs/
    ├── MASTER-DOCUMENTATION.md    # Diese Datei
    ├── setup-guide.md             # Einrichtung
    ├── model-strategy.md          # Welches Model wann
    ├── cost-optimization.md       # Tokens sparen
    └── worktree-guide.md          # Git Worktrees
```

### Projekt-Integration

```
dein-projekt/
│
├── .claude-team/                  ← Git Submodule → claude-ai-team
│   └── (komplettes AI Team)
│
├── .claude/
│   ├── agents/                    ← Projekt-spezifische Agents
│   └── skills/
│       └── [projekt]/             ← Projekt-spezifische Skills
│
├── CLAUDE.md                      ← Projekt-spezifische Config
│
└── (dein Code...)
```

---

## 👥 Agents & Hierarchie

### Organigramm

```
                            ┌─────────────┐
                            │     DU      │
                            │   (Owner)   │
                            └──────┬──────┘
                                   │
                            ┌──────┴──────┐
                            │     CEO     │
                            │  (Opus 4.5) │
                            │             │
                            │ • Prompt    │
                            │   Engineer  │
                            │ • Orchestr. │
                            └──────┬──────┘
                                   │
        ┌──────────┬───────────┬───┴───┬───────────┬──────────┐
        │          │           │       │           │          │
   ┌────┴────┐┌────┴────┐┌────┴────┐┌─┴──────┐┌───┴────┐┌────┴────┐
   │   CTO   ││   CFO   ││   CMO   ││  CSO   ││  COO   ││ Andere  │
   │ Sonnet  ││ Sonnet  ││ Sonnet  ││ Sonnet ││ Sonnet ││ C-Level │
   └────┬────┘└────┬────┘└────┬────┘└───┬────┘└───┬────┘└─────────┘
        │          │          │         │         │
   ┌────┴────┐┌────┴────┐┌────┴───┐┌────┴───┐┌────┴────┐
   │Dev Team ││ Finance ││Marketing││ Sales  ││  Ops   │
   │         ││  Team   ││  Team   ││  Team  ││  Team  │
   └─────────┘└─────────┘└─────────┘└────────┘└────────┘
```

### Agent Übersicht

#### C-Level (Orchestratoren)

| Agent | Model | Rolle | Sparring | Execution |
|-------|-------|-------|----------|-----------|
| **CEO** | Opus 4.5 | Prompt Engineer + Orchestrator | Strategie, Big Picture | Koordiniert Multi-Agent Tasks |
| **CTO** | Sonnet 4.5 | Tech Lead | Architektur, Tech Decisions | Delegiert an Dev Team |
| **CFO** | Sonnet 4.5 | Finance Lead | Business Cases, ROI | Kalkulationen, Reports |
| **CMO** | Sonnet 4.5 | Marketing Lead | Brand, Positioning | Content, Campaigns |
| **CSO** | Sonnet 4.5 | Sales Lead | Growth Strategy | Outreach, Lead Gen |
| **COO** | Sonnet 4.5 | Operations Lead | Prozesse, Skalierung | Optimierung, SOPs |

#### Team Members

| Agent | Model | Lead | Aufgaben |
|-------|-------|------|----------|
| Senior Developer | Sonnet 4.5 | CTO | Komplexe Features, Code Review |
| Backend Developer | Sonnet 4.5 | CTO | APIs, Database, Server Logic |
| Frontend Developer | Sonnet 4.5 | CTO | UI Components, React |
| UI Designer | Sonnet 4.5 | CTO | Design, UX, Styling |
| Security Engineer | Sonnet 4.5 | CTO | Auth, Permissions, Security |
| Junior Developer | Haiku 4.5 | Senior Dev | Einfache Tasks, Fixes |
| Code Reviewer | Haiku 4.5 | Senior Dev | PR Reviews, Standards |
| QA Engineer | Sonnet 4.5 | CTO | Testing, Bug Finding |
| Financial Analyst | Sonnet 4.5 | CFO | Kalkulationen, Analysis |
| Accountant | Haiku 4.5 | CFO | Standard Berechnungen |
| Sales Strategist | Sonnet 4.5 | CSO | Sales Planning |
| Lead Generator | Haiku 4.5 | CSO | Recherche, Listen |
| Research Agent | Haiku 4.5 | CSO | Market Research |
| Content Creator | Haiku 4.5 | CMO | Posts, Articles |
| Copywriter | Sonnet 4.5 | CMO | Sales Copy, Landing Pages |
| Social Media Manager | Haiku 4.5 | CMO | Social Posts, Engagement |
| Ops Manager | Sonnet 4.5 | COO | Process Management |
| Process Optimizer | Haiku 4.5 | COO | Efficiency, Automation |

### Agent Persönlichkeiten

```
CEO:    Strategisch, Big Picture, fragt "Warum?"
        "Bevor wir das machen - passt das zu unserer Vision?"

CTO:    Pragmatisch, technisch, warnt vor Over-Engineering
        "Das können wir bauen, aber brauchen wir es wirklich?"

CFO:    Konservativ, zahlengetrieben, Risk-aware
        "Die Zahlen sagen... Aber bedenke das Risiko..."

CMO:    Kreativ, brand-focused, customer-centric
        "Wie fühlt sich das für den Kunden an?"

CSO:    Aggressiv, growth-focused, optimistisch
        "Wir können 10x wachsen wenn wir nur..."

COO:    Operativ, prozess-orientiert, realistisch
        "Können wir das überhaupt liefern?"
```

---

## 📚 Skills System

### Was sind Skills?

Skills sind **Wissens-Module** die Agents nutzen können:

- Fachliches Wissen (z.B. "Wie man APIs designed")
- Projekt-Kontext (z.B. "Was ist Snackify")
- Best Practices (z.B. "Node.js Standards")
- Templates (z.B. "Outreach Email Vorlage")

### Skill-Typen

| Typ | Location | Beispiel | Für wen |
|-----|----------|----------|---------|
| **Universal** | `skills/universal/` | Prompt Engineering | Alle Agents |
| **Development** | `skills/development/` | Node.js Standards | Dev Team |
| **Business** | `skills/business/` | Product Costing | Finance, Sales, Marketing |
| **Projekt** | `.claude/skills/[projekt]/` | Snackify Context | Nur dieses Projekt |

### Skill-Zuweisung

Agents bekommen automatisch relevante Skills:

```yaml
CEO:
  - universal/prompt-engineering.md
  - universal/communication.md
  - [projekt]/context.md

CTO:
  - development/*
  - [projekt]/architecture.md

CFO:
  - business/product-costing.md
  - business/financial-analysis.md

Backend Developer:
  - development/nodejs-standards.md
  - development/postgresql-best-practices.md
  - development/api-design.md
```

---

## ⚡ Commands & Workflows

### Wichtige Commands

| Command | Beschreibung |
|---------|--------------|
| `/hire-agent` | Neuen Agent ins Team holen |
| `/create-skill` | Neuen Skill erstellen |
| `/daily-standup` | Team Status Update |
| `/commit-push-pr` | Git Workflow automatisieren |
| `/plan-feature` | Feature mit CTO planen |

### Beispiel: /hire-agent

```
DU: "/hire-agent"

CEO: "Wen brauchst du im Team?
      Beschreib die Rolle kurz."

DU: "Jemand für Testing"

CEO: "Ich hire einen QA Engineer:
      
      Name: qa-engineer
      Team: Development (unter CTO)
      Model: Sonnet 4.5
      Skills: testing-standards.md
      
      Soll ich ihn so erstellen?"

DU: "Ja"

CEO: "✅ QA Engineer ist im Team.
      
      Du kannst ihn nutzen:
      @qa-engineer prüf diesen Code"
```

---

## 💰 Kosten-Optimierung

### Model-Kosten Hierarchie

```
TEUER                                        GÜNSTIG
  │                                              │
  ▼                                              ▼
  
Opus 4.5          Sonnet 4.5              Haiku 4.5
   │                  │                       │
  CEO            C-Level                  Junior Tasks
              Senior Agents              Simple Execution
```

### Wann wen ansprechen

```
┌────────────────────────────────────────────────────────────────┐
│                    WEN SPRECHE ICH AN?                         │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🔴 CEO (Opus) - NUR wenn:                                     │
│     • Du nicht weißt was du willst                             │
│     • Mehrere Abteilungen involviert                           │
│     • Strategische Entscheidung                                │
│     • Du einfach "normal reden" willst                         │
│                                                                 │
│  🟡 C-LEVEL (Sonnet) - Wenn:                                   │
│     • Du weißt WELCHER Bereich (Tech/Finance/Sales/...)        │
│     • Task braucht Planung + Execution                         │
│     • Du Sparring willst in dem Bereich                        │
│                                                                 │
│  🟢 TEAM MEMBER (Sonnet/Haiku) - Wenn:                         │
│     • Task ist klar und einfach                                │
│     • Keine Planung nötig                                      │
│     • Du genau weißt was rauskommen soll                       │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### Die goldene Regel

```
KLAR was du willst?    →    DIREKT zum zuständigen Agent
UNKLAR was du willst?  →    CEO (optimiert deinen Prompt)
```

### Kosten-Beispiele

| Weg | Tokens (ca.) | Wann nutzen |
|-----|--------------|-------------|
| Direkt → Haiku Agent | ~5k | Simple Tasks |
| Direkt → Sonnet Agent | ~10k | Klare Tasks mit Substanz |
| C-Level → Team | ~15-20k | Tasks mit Planung |
| CEO → Multi-Agent | ~30-50k | Komplexe/Unklare Tasks |

---

## 🔗 Projekt-Integration

### Neues Projekt aufsetzen

```bash
# 1. Repo erstellen
mkdir mein-projekt && cd mein-projekt
git init

# 2. AI Team als Submodule hinzufügen
git submodule add https://github.com/[user]/claude-ai-team .claude-team

# 3. CLAUDE.md kopieren und anpassen
cp .claude-team/CLAUDE.md .
# → Projekt-Name eintragen
# → Relevante Skills definieren

# 4. Projekt-spezifische Skills erstellen
mkdir -p .claude/skills/[projekt]
# → Context, Architektur, etc.

# 5. Commit
git add .
git commit -m "Setup AI Team"
```

### Bestehendes Projekt integrieren

```bash
cd bestehendes-projekt

# 1. Submodule hinzufügen
git submodule add https://github.com/[user]/claude-ai-team .claude-team

# 2. CLAUDE.md erstellen
cp .claude-team/CLAUDE.md .
# → Anpassen für dein Projekt

# 3. Bestehende Agents migrieren
# Universal → nach claude-ai-team/
# Projekt-spezifisch → nach .claude/

# 4. Commit
git add .
git commit -m "Integrate AI Team"
```

### AI Team updaten

```bash
cd dein-projekt
git submodule update --remote .claude-team
git add .claude-team
git commit -m "Update AI Team"
```

---

## 🎓 Hiring Process

### Ablauf

```
1. DU: "Ich brauch jemanden für X"
           ↓
2. CEO: Analysiert
   • Welche Rolle?
   • Welches Team?
   • Universal oder projekt-spezifisch?
           ↓
3. CEO: Designt Agent
   • Name, Skills, Model
   • Persönlichkeit
   • Aufgaben
           ↓
4. CEO: Zeigt Profil zur Bestätigung
           ↓
5. DU: "OK" oder "Ändere X"
           ↓
6. CEO: Erstellt Agent + Skills
           ↓
7. CEO: Bestätigt
   "✅ [Name] ist im Team"
```

### Wo landet der neue Agent?

| Typ | Location | Wann |
|-----|----------|------|
| **Universal** | `claude-ai-team/agents/` | Für alle Projekte nützlich |
| **Projekt-spezifisch** | `.claude/agents/` | Nur für dieses Projekt |

---

## ✅ Best Practices

### Boris Cherny's Tipps (Claude Code Creator)

1. **CLAUDE.md pflegen** - Jeder Fehler wird dokumentiert
2. **Plan Mode nutzen** - Erst planen, dann ausführen
3. **Verification einbauen** - Agents prüfen ihre Arbeit
4. **Worktrees für parallele Arbeit** - Keine Branch-Konflikte
5. **Slash Commands** - Wiederkehrende Workflows automatisieren

### Kommunikation

| DO | DON'T |
|----|-------|
| Direkt zum richtigen Agent bei klaren Tasks | Immer über CEO für simple Sachen |
| Batching ähnlicher Tasks | Jeden Task einzeln |
| Haiku für Simple, Sonnet für Komplex | Opus für alles |
| Plan Mode bei großen Features | Direkt losbauen |

### Dokumentation

- Jede Änderung in CHANGELOG.md
- Jeder neue Agent/Skill dokumentiert
- Fehler in CLAUDE.md aufnehmen
- Entscheidungen festhalten

---

## 🚀 Quick Start

```bash
# 1. Repo klonen
git clone https://github.com/[user]/claude-ai-team

# 2. In dein Projekt integrieren
cd dein-projekt
git submodule add [url] .claude-team

# 3. CLAUDE.md kopieren & anpassen
cp .claude-team/CLAUDE.md .

# 4. Loslegen!
# "@ceo was können wir heute machen?"
```

---

## 📞 Support

Bei Fragen oder Problemen:
1. MASTER-DOCUMENTATION.md lesen (diese Datei)
2. CEO fragen ("@ceo wie mache ich X?")
3. Neue Skills/Agents erstellen wenn nötig

---

*Version 1.0 - Erstellt für Kyriakos / Snackify*
