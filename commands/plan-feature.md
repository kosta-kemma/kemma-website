# 🎯 /plan-feature

---
name: plan-feature
description: Feature Planning mit CEO und CTO
---

## Was dieser Command macht

Strukturierte Feature-Planung:
1. Requirements verstehen
2. Technisches Design
3. Tasks aufteilen
4. Timeline schätzen

---

## Ablauf

### Step 1: CEO sammelt Requirements

```
"Feature Planning gestartet.

FEATURE: [Name]

Lass mich ein paar Fragen klären:

1. WAS genau soll das Feature machen?
2. FÜR WEN ist es? (Welcher User/Persona)
3. WARUM brauchen wir es? (Business Value)
4. WANN soll es fertig sein?
5. Gibt es CONSTRAINTS? (Tech, Budget, etc.)
"
```

### Step 2: CEO fasst zusammen

```
"Verstanden. Hier ist was ich verstehe:

FEATURE BRIEF:
═══════════════════════════════════════

Name: [Feature Name]

User Story:
Als [Persona]
will ich [Aktion]
damit ich [Benefit]

Akzeptanzkriterien:
□ [Kriterium 1]
□ [Kriterium 2]
□ [Kriterium 3]

Constraints:
• [Constraint 1]
• [Constraint 2]

═══════════════════════════════════════

Stimmt das so? Dann übergebe ich an den CTO
für technische Planung."
```

### Step 3: CTO plant technisch

```
"@cto Hier ist das Feature Brief für technische Planung:

[Feature Brief]

Bitte erstelle:
1. Technische Spezifikation
2. Task Breakdown
3. Timeline Schätzung
"

---

CTO Output:

"TECHNISCHE SPEZIFIKATION
═══════════════════════════════════════

Architecture:
• [Component 1]
• [Component 2]

API Changes:
• [Endpoint 1]: [Beschreibung]
• [Endpoint 2]: [Beschreibung]

Database Changes:
• [Table/Column]: [Change]

Frontend Changes:
• [Component]: [Change]

═══════════════════════════════════════

TASK BREAKDOWN:

| # | Task | Owner | Est. | Deps |
|---|------|-------|------|------|
| 1 | [Task] | Backend Dev | 2h | - |
| 2 | [Task] | Frontend Dev | 4h | 1 |
| 3 | [Task] | QA | 2h | 2 |

═══════════════════════════════════════

TIMELINE:
• Start: [Date]
• Dev Complete: [Date]
• Testing: [Date]
• Release: [Date]

Total: [X] Tage

═══════════════════════════════════════

Soll ich starten?"
```

---

## Output

Ein kompletter Feature Plan mit:
- Requirements
- Technical Spec
- Task Breakdown
- Timeline
- Ready für Execution

---

## Nutzung

```
/plan-feature
/plan-feature "Customer Portal"
/plan-feature --quick  (weniger Detail)
```

---

*Gute Planung = Schnellere Delivery.*
