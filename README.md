# 🏢 Claude AI Team

> Ein virtuelles Unternehmen mit AI Agents - Dein Team das mit dir denkt, diskutiert und arbeitet.

---

## 🎯 Was ist das?

Ein **wiederverwendbares AI-Team** für alle deine Projekte:

- **CEO** als Prompt Engineer - Du redest wie du willst, er optimiert
- **C-Level** für Sparring - CTO, CFO, CMO, CSO, COO mit eigenen Perspektiven
- **Teams** für Execution - Developer, Analysts, Creators die liefern
- **Skills Library** - Geteiltes Wissen über alle Projekte

## 🚀 Quick Start

### In ein neues Projekt integrieren

```bash
cd dein-projekt

# Als Submodule hinzufügen
git submodule add https://github.com/[user]/claude-ai-team .claude-team

# CLAUDE.md Template kopieren
cp .claude-team/CLAUDE-TEMPLATE.md CLAUDE.md

# Anpassen für dein Projekt
# → Projekt-Name, Stack, relevante Agents
```

### AI Team updaten

```bash
git submodule update --remote .claude-team
git add .claude-team
git commit -m "Update AI Team"
```

## 👥 Das Team

### C-Level (Sparring + Orchestration)

| Agent | Rolle | Wann ansprechen |
|-------|-------|-----------------|
| **CEO** | Prompt Engineer, Orchestrator | Wenn unklar / Multi-Domain / Strategie |
| **CTO** | Tech Lead | Tech Fragen, Feature Development |
| **CFO** | Finance Lead | Kalkulationen, Business Cases |
| **CMO** | Marketing Lead | Brand, Content, Campaigns |
| **CSO** | Sales Lead | Growth, Outreach, Lead Gen |
| **COO** | Operations Lead | Prozesse, Delivery, Skalierung |

### Teams

- **Development**: Senior Dev, Backend, Frontend, UI, Security, Junior, QA
- **Finance**: Financial Analyst, Accountant
- **Sales**: Sales Strategist, Lead Generator, Research Agent
- **Marketing**: Social Media Manager, Ad Creative Designer, Performance Marketer
- **Operations**: Ops Manager, Process Optimizer

## 💰 Kosten-Optimierung

```
KLAR was du willst?    →    Direkt zum Agent (günstig)
UNKLAR was du willst?  →    CEO (teurer, aber optimiert)
```

| Agent Level | Model | Wann nutzen |
|-------------|-------|-------------|
| CEO | Opus 4.5 | Strategie, Multi-Domain, Prompt Engineering |
| C-Level | Sonnet 4.5 | Planung, Sparring, komplexe Tasks |
| Team Members | Haiku 4.5 | Einfache Tasks, Execution |

## 📚 Dokumentation

- [Master Documentation](docs/MASTER-DOCUMENTATION.md) - Alles im Detail
- [Setup Guide](docs/setup-guide.md) - Einrichtung Schritt für Schritt
- [Cost Optimization](docs/cost-optimization.md) - Tokens sparen
- [Model Strategy](docs/model-strategy.md) - Welches Model wann

## 📁 Struktur

```
claude-ai-team/
├── agents/           # Alle AI Agents
│   ├── ceo.md
│   ├── cto.md, cfo.md, cmo.md, cso.md, coo.md
│   ├── dev/          # Development Team
│   ├── finance/      # Finance Team
│   ├── sales/        # Sales Team
│   ├── marketing/    # Marketing Team
│   └── operations/   # Operations Team
├── skills/           # Wissens-Module
│   ├── universal/    # Für alle Projekte
│   ├── development/  # Dev Best Practices
│   └── business/     # Business Skills
├── commands/         # Slash Commands
├── templates/        # Vorlagen für neue Agents/Skills
└── docs/             # Dokumentation
```

## 🆕 Neuen Agent erstellen

```
DU: "@ceo ich brauch jemanden für Testing"

CEO: "Ich hire einen QA Engineer..."
     [erstellt Agent automatisch]

CEO: "✅ QA Engineer ist im Team.
      Nutze: @qa-engineer prüf den Code"
```

## 📝 License

MIT

---

*Built for getting things done.*
