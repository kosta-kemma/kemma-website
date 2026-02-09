# 📋 /daily-standup

---
name: daily-standup
description: Team Status Update und Tagesplanung
---

## Was dieser Command macht

Gibt einen Überblick über:
1. Was gestern erledigt wurde
2. Was heute geplant ist
3. Blocker/Probleme

---

## Ablauf

### CEO führt Standup

```
"Guten Morgen! Hier ist der Team Status:

════════════════════════════════════════
DAILY STANDUP - [Datum]
════════════════════════════════════════

📊 GESTERN ERLEDIGT:
───────────────────
• [Task 1] - [Status]
• [Task 2] - [Status]
• [Task 3] - [Status]

📋 HEUTE GEPLANT:
───────────────────
PRIORITÄT 1:
• [Task] - [Wer]

PRIORITÄT 2:
• [Task] - [Wer]

PRIORITÄT 3:
• [Task] - [Wer]

🚧 BLOCKER:
───────────────────
• [Blocker 1] - [Wer kann helfen]
• [Keine Blocker]

💡 NOTIZEN:
───────────────────
• [Wichtige Info]

════════════════════════════════════════
Fragen? Änderungen an den Prioritäten?"
```

---

## Input Sources

Der CEO kann Status ziehen aus:
- Git Commits (gestern)
- Task System (wenn vorhanden)
- CLAUDE.md Notizen
- Letzte Konversation

---

## Nutzung

```
/daily-standup
/daily-standup --yesterday-only
/daily-standup --plan-only
```

---

*5 Minuten Standup spart Stunden Chaos.*
