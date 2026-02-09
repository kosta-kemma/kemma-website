# 🎨 /create-skill - Skill Generator

---
name: create-skill
description: Interaktiver Generator für neue Skills - generiert Content, Pfad und Commands
---

## Was dieser Command macht

Generiert komplette Skills mit:
- ✅ Korrektem MD Format
- ✅ Richtigem Speicherpfad
- ✅ Terminal Commands zum Ausführen
- ✅ Agent-Updates (falls nötig)

---

## Ablauf

### Step 1: Thema erfragen

```
"Was soll der Skill abdecken?"

Beispiele:
- "Docker für unsere Deployments"
- "Snackify Lieferanten und deren Produkte"
- "WhatsApp Business API Integration"
- "Dubai Food Safety Regulations"
```

### Step 2: Zielgruppe bestimmen

```
"Für wen ist dieser Skill?"

┌─────────────────────────────────────────────────────────────┐
│  [1] NUR DIESES PROJEKT                                     │
│      → .claude/skills/[projekt]/                            │
│      → Auto-loaded für alle Agents im Projekt               │
│      → Agents ändern: NEIN ✅                                │
├─────────────────────────────────────────────────────────────┤
│  [2] UNIVERSAL (alle Projekte, alle Agents)                 │
│      → skills/universal/                                    │
│      → Auto-loaded überall                                  │
│      → Agents ändern: NEIN ✅                                │
├─────────────────────────────────────────────────────────────┤
│  [3] DEVELOPMENT (alle Dev Agents)                          │
│      → skills/development/                                  │
│      → Backend, Frontend, Senior, Junior, Security, QA      │
│      → Agents ändern: JA (ich sage welche)                  │
├─────────────────────────────────────────────────────────────┤
│  [4] BUSINESS (Finance/Sales/Marketing/Ops)                 │
│      → skills/business/                                     │
│      → Relevante Business Agents                            │
│      → Agents ändern: JA (ich sage welche)                  │
├─────────────────────────────────────────────────────────────┤
│  [5] EIN SPEZIFISCHER AGENT                                 │
│      → In dessen skills: Liste                              │
│      → Agents ändern: JA (nur dieser eine)                  │
└─────────────────────────────────────────────────────────────┘
```

### Step 3: Details sammeln (kurz)

```
"Gib mir 3-5 Stichpunkte was rein soll:"
```

### Step 4: Skill generieren

Format:
```markdown
# [Icon] [Skill Name]

---
name: [kebab-case-name]
description: [Ein Satz Beschreibung]
category: [project|universal|development|business]
used_by: [agents]
version: 1.0
---

## 📚 Übersicht

[2-3 Sätze]

---

## 📋 Kernwissen

### [Thema 1]
[Inhalt]

### [Thema 2]
[Inhalt]

---

## ⚠️ Häufige Fehler

| Fehler | Besser |
|--------|--------|
| [X] | [Y] |

---

## ✅ Checkliste

```
□ [Check 1]
□ [Check 2]
□ [Check 3]
```

---

*[Abschluss]*
```

### Step 5: Komplettes Output

```
════════════════════════════════════════════════════════════════
📄 SKILL GENERIERT: [name].md
════════════════════════════════════════════════════════════════

📁 SPEICHERPFAD:
   [Pfad]

🤖 AGENTS UPDATEN:
   [Liste oder "Nicht nötig ✅"]

💻 TERMINAL COMMANDS:

   # 1. Zum richtigen Ordner
   cd [pfad-zum-repo]

   # 2. Skill erstellen
   cat > [skill-pfad] << 'EOF'
   [KOMPLETTER SKILL CONTENT]
   EOF

   # 3. [Falls Agent-Update nötig]
   # Öffne: [agent-file]
   # Füge zu skills: hinzu:
   #   - [skill-path]

   # 4. Committen
   git add .
   git commit -m "Add [skill-name] skill"
   git push

   # 5. [Falls zentrales Repo - in Projekten updaten]
   cd ~/projects/[projekt]
   git submodule update --remote .claude-team
   git add .claude-team
   git commit -m "Update AI Team"
   git push

════════════════════════════════════════════════════════════════

📋 COPY-PASTE READY!
```

---

## Quick Reference

| Zielgruppe | Pfad | Auto-Load? | Agents ändern? |
|------------|------|------------|----------------|
| Projekt | `.claude/skills/[projekt]/` | ✅ | ❌ Nein |
| Universal | `skills/universal/` | ✅ | ❌ Nein |
| Development | `skills/development/` | ❌ | ✅ Ja |
| Business | `skills/business/` | ❌ | ✅ Ja |

---

## Agent-Zuordnung (wenn nötig)

### Development Skills → Diese Agents:
```
- agents/dev/backend-developer.md
- agents/dev/frontend-developer.md
- agents/dev/senior-developer.md
- agents/dev/security-engineer.md
- agents/dev/qa-engineer.md
```

### Business Skills → Je nach Thema:
```
Finance:    agents/cfo.md, agents/finance/financial-analyst.md
Sales:      agents/cso.md, agents/sales/sales-strategist.md
Marketing:  agents/cmo.md, agents/marketing/copywriter.md
Operations: agents/coo.md, agents/operations/ops-manager.md
```

---

## Beispiel-Durchlauf

```
USER: /create-skill

CEO: "Was soll der Skill abdecken?"

USER: "Unsere Snackify Lieferanten"

CEO: "Für wen?
      [1] Nur Snackify
      [2] Universal
      [3] Development
      [4] Business
      [5] Spezifischer Agent"

USER: "1"

CEO: "3-5 Stichpunkte was rein soll?"

USER: "- Alle Lieferanten
       - Produkte pro Lieferant
       - Kontaktdaten
       - Preise"

CEO: 
════════════════════════════════════════════════════════════════
📄 SKILL GENERIERT: suppliers.md
════════════════════════════════════════════════════════════════

📁 SPEICHERPFAD:
   .claude/skills/snackify/suppliers.md

🤖 AGENTS UPDATEN:
   Nicht nötig ✅ (Projekt-Skill = auto-loaded)

💻 TERMINAL COMMANDS:

   cd ~/projects/snackify

   cat > .claude/skills/snackify/suppliers.md << 'EOF'
   # 📦 Snackify Suppliers
   
   ---
   name: snackify-suppliers
   description: Lieferanten-Übersicht für Snackify
   category: project
   used_by: all-agents
   version: 1.0
   ---
   
   ## 📚 Übersicht
   
   Alle Lieferanten von Snackify mit Produkten, Kontakten und Preisen.
   
   ---
   
   ## 📋 Lieferanten
   
   ### [Lieferant 1]
   - **Produkte:** [...]
   - **Kontakt:** [...]
   - **Preise:** [...]
   
   ### [Lieferant 2]
   - **Produkte:** [...]
   - **Kontakt:** [...]
   - **Preise:** [...]
   
   ---
   
   ## ✅ Checkliste
   
   ```
   □ Lieferant kontaktiert
   □ Preise aktuell
   □ Qualität geprüft
   ```
   
   ---
   
   *Regelmäßig aktualisieren!*
   EOF

   git add .
   git commit -m "Add suppliers skill"
   git push

════════════════════════════════════════════════════════════════
```

---

*Ein guter Skill spart hunderte Erklärungen.*
