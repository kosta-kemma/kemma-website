# ⚙️ Operations

---
name: operations
description: Operations Management, Prozesse und Skalierung
category: business
used_by:
  - coo
  - ops-manager
  - process-optimizer
version: 1.0
---

## 📚 Übersicht

Frameworks für Operations Management und Skalierung.

---

## 📋 Capacity Planning

```
CURRENT STATE:
- Output/Tag: [X]
- Team Size: [X]
- Bottleneck: [X]

GROWTH SCENARIO:
| Volume | Team | Bottleneck | Action Needed |
|--------|------|------------|---------------|
| 1x     | [X]  | [X]        | -             |
| 2x     | [X]  | [X]        | [Action]      |
| 5x     | [X]  | [X]        | [Action]      |
| 10x    | [X]  | [X]        | [Action]      |
```

---

## 📋 Process Mapping

```
[START] ──► [Step 1] ──► [Step 2] ──► [Decision?]
                                         │
                              ┌──────────┴──────────┐
                              ▼                     ▼
                          [Yes Path]            [No Path]
                              │                     │
                              └─────────┬───────────┘
                                        ▼
                                    [END]

Für jeden Step dokumentieren:
- Was passiert
- Wer ist verantwortlich
- Wie lange dauert es
- Was kann schiefgehen
```

---

## 📋 SOP Structure

```markdown
# SOP: [Name]

**Version:** X.X
**Owner:** [Person]
**Last Updated:** [Date]

## Zweck
[Warum dieser Prozess]

## Scope
[Was ist included/excluded]

## Prerequisites
- [Was muss vorher da sein]

## Steps
1. [ ] [Step 1]
2. [ ] [Step 2]
3. [ ] [Step 3]

## Quality Checks
- [ ] [Check 1]
- [ ] [Check 2]

## Common Issues
| Issue | Solution |
|-------|----------|
| [X]   | [Y]      |

## Escalation
[Wann und an wen eskalieren]
```

---

## 📋 Bottleneck Analysis

```
THEORY OF CONSTRAINTS:

1. IDENTIFY the constraint (slowest step)
2. EXPLOIT the constraint (maximize its output)
3. SUBORDINATE everything else to it
4. ELEVATE the constraint (invest to increase capacity)
5. REPEAT (find the new constraint)

Fragen:
- Wo sammelt sich Arbeit an?
- Welcher Step hat die längste Wartezeit?
- Welcher Step hat die meisten Fehler?
```

---

## 📋 Key Metrics

```
EFFICIENCY:
- Output per Hour
- Utilization Rate
- Cycle Time

QUALITY:
- Error Rate
- Rework Rate
- Customer Complaints

COST:
- Cost per Unit
- Labor Cost %
- Waste %
```

---

## 📋 Scaling Checklist

```
VOR DEM SKALIEREN:
□ Prozesse dokumentiert (SOPs)
□ Bottlenecks identifiziert
□ Metrics definiert und getracked
□ Quality Standards klar
□ Team kann ohne dich funktionieren

BEIM SKALIEREN:
□ Schrittweise erhöhen (nicht alles auf einmal)
□ Metrics monitoren
□ Feedback Loops einbauen
□ Schnell reagieren bei Problemen
```

---

*Ein guter Prozess funktioniert auch ohne dich.*
