# 🎯 Prompt Engineering

---
name: prompt-engineering
description: Best Practices für effektive Prompts und Kommunikation
category: universal
used_by:
  - ceo
  - all-agents
version: 1.0
---

## 📚 Übersicht

Dieser Skill enthält die Grundlagen für effektive Prompts - sowohl für die Kommunikation mit dem User als auch für die Delegation zwischen Agents.

---

## 📋 Kernwissen

### Struktur eines guten Prompts

Ein effektiver Prompt hat:

1. **Kontext** - Was ist die Situation?
2. **Aufgabe** - Was soll gemacht werden?
3. **Format** - Wie soll das Ergebnis aussehen?
4. **Constraints** - Was sind die Grenzen?

**Template:**
```
KONTEXT:
[Hintergrund und relevante Infos]

AUFGABE:
[Klare Beschreibung was zu tun ist]

OUTPUT:
[Gewünschtes Format/Struktur]

CONSTRAINTS:
[Einschränkungen, Regeln, Grenzen]
```

---

### Vage → Präzise Transformation

| Vage (schlecht) | Präzise (gut) |
|-----------------|---------------|
| "Mach was mit Sales" | "Erstelle 3 Email-Templates für Hotel-Outreach mit Value Prop für Snackify" |
| "Fix den Bug" | "Fix den Login Bug: User werden nach 5 Min ausgeloggt obwohl 'Remember Me' aktiv" |
| "Brauch Content" | "Erstelle 5 LinkedIn Posts über nachhaltige Verpackung, Tone: professional, 100-150 Worte" |

---

### Prompt-Komponenten

#### 1. Rolle definieren
```
Du bist ein [Rolle] der [Expertise hat].
Deine Aufgabe ist [Hauptverantwortung].
```

#### 2. Kontext geben
```
SITUATION:
- [Fakt 1]
- [Fakt 2]
- [Fakt 3]
```

#### 3. Klare Instruktion
```
AUFGABE:
Erstelle [was] das [Ziel erreicht].

SCHRITTE:
1. [Schritt 1]
2. [Schritt 2]
3. [Schritt 3]
```

#### 4. Output spezifizieren
```
OUTPUT FORMAT:
- Format: [Markdown/Excel/JSON/etc.]
- Länge: [Ungefähre Länge]
- Struktur: [Gewünschte Struktur]
```

---

## 🔧 Praktische Anwendung

### Anwendungsfall: User-Anfrage optimieren

**User sagt:**
> "mach mal was für hotels"

**Transformiert zu:**
```
KONTEXT:
- Snackify: B2B Cookie-Verpackung, Dubai
- Ziel: Hotel-Segment erschließen
- Aktuell: Hauptsächlich Cafés

AUFGABE:
Erstelle ein Hotel Sales Kit bestehend aus:
1. Ziel-Hotel Liste (Top 20 Dubai)
2. Value Proposition für Hotels
3. Outreach Templates (Email + WhatsApp)
4. Beispiel-Kalkulation

OUTPUT:
- Hotel-Liste: Excel
- Value Prop: 1-Pager Markdown
- Templates: Markdown mit Platzhaltern
- Kalkulation: Excel mit Formeln
```

---

## ⚠️ Häufige Fehler

| Fehler | Problem | Besser |
|--------|---------|--------|
| Zu vage | Agent muss raten | Spezifische Details geben |
| Zu lang | Wichtiges geht unter | Auf Kernpunkte fokussieren |
| Kein Format | Output-Qualität variiert | Format explizit angeben |
| Keine Constraints | Scope creep | Klare Grenzen setzen |

---

## ✅ Checkliste für gute Prompts

- [ ] Kontext ist klar?
- [ ] Aufgabe ist spezifisch?
- [ ] Output-Format definiert?
- [ ] Constraints genannt?
- [ ] Erfolg messbar?

---

## 🔗 Verwandte Skills

- [communication.md] - Allgemeine Kommunikations-Standards
- [documentation.md] - Wie dokumentieren
