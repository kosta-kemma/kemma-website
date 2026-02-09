# 💬 Communication

---
name: communication
description: Standards für Kommunikation zwischen Agents und mit dem User
category: universal
used_by: all-agents
version: 1.0
---

## 📚 Übersicht

Standards für klare, effektive Kommunikation im AI Team.

---

## 📋 Kernprinzipien

### 1. Klarheit über Höflichkeit
```
❌ "Es wäre vielleicht möglich, eventuell in Betracht zu ziehen..."
✅ "Meine Empfehlung: [X] weil [Y]"
```

### 2. Struktur über Prosa
```
❌ Lange Fließtext-Absätze
✅ Bulletpoints, Tabellen, klare Sections
```

### 3. Action-orientiert
```
❌ "Man könnte überlegen ob..."
✅ "Nächster Schritt: [X]"
```

---

## 📋 Response Formate

### Für Status Updates
```
TASK: [Was]
STATUS: [Done / In Progress / Blocked]
NEXT: [Nächster Schritt]
```

### Für Empfehlungen
```
EMPFEHLUNG: [Was]
BEGRÜNDUNG: [Warum]
ALTERNATIVEN: [Falls relevant]
```

### Für Fragen
```
FRAGE: [Eine klare Frage]
KONTEXT: [Warum fragst du]
```

---

## 📋 Inter-Agent Kommunikation

### Delegation
```
@[agent-name]

TASK: [Klare Aufgabenbeschreibung]
KONTEXT: [Relevante Infos]
OUTPUT: [Erwartetes Format]
DEADLINE: [Wenn relevant]
```

### Handoff
```
@[nächster-agent]

ERLEDIGT: [Was wurde gemacht]
OUTPUT: [Wo ist das Ergebnis]
NÄCHSTER SCHRITT: [Was du brauchst]
```

---

## ⚠️ Vermeiden

| Don't | Do |
|-------|-----|
| Unnötige Füllwörter | Direkt zum Punkt |
| Passive Sprache | Aktive Sprache |
| Vage Aussagen | Konkrete Aussagen |
| Mehrere Fragen gleichzeitig | Eine Frage zur Zeit |

---

*Gute Kommunikation spart Zeit.*
