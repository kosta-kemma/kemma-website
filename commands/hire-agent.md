# 🆕 /hire-agent - Neuen Agent erstellen

---
name: hire-agent
description: Erstellt einen neuen Agent für das Team
---

## Wann nutzen

Wenn du einen neuen Spezialisten im Team brauchst:
- Neue Rolle/Funktion benötigt
- Bestehendes Team braucht Verstärkung
- Spezielles Wissen gebraucht

---

## Ablauf

### Schritt 1: Anforderungen verstehen

Frage (falls nicht angegeben):

```
1. ROLLE: Wie soll der Agent heißen / was ist seine Funktion?
2. TEAM: Unter welchem C-Level? (CTO/CFO/CMO/CSO/COO)
3. AUFGABEN: Was soll er konkret machen?
4. SCOPE: Universal (alle Projekte) oder projekt-spezifisch?
```

### Schritt 2: Agent designen

```yaml
name: [kebab-case-name]
description: [Ein Satz was er macht]
model: [opus-4.5 | sonnet-4.5 | haiku-4.5]
reports_to: [ceo | cto | cfo | cmo | cso | coo]
skills:
  - [existierende Skills]
  - [neue Skills falls nötig]

personality:
  - [Trait 1]
  - [Trait 2]

responsibilities:
  - [Aufgabe 1]
  - [Aufgabe 2]
```

### Schritt 3: Model-Empfehlung

| Komplexität | Model | Beispiele |
|-------------|-------|-----------|
| Hoch | Sonnet 4.5 | Architektur, Strategie, komplexe Analyse |
| Mittel | Sonnet 4.5 | Standard Development, Kalkulationen |
| Niedrig | Haiku 4.5 | Content, Recherche, einfache Tasks |

### Schritt 4: User Confirmation

```
Zeige das Agent Profil:

"Ich würde folgenden Agent erstellen:

NAME: [name]
TEAM: [team] (unter [lead])
MODEL: [model]
SKILLS: [skill-liste]

AUFGABEN:
• [Aufgabe 1]
• [Aufgabe 2]

PERSÖNLICHKEIT:
• [Trait 1]
• [Trait 2]

Soll ich ihn so erstellen?"
```

### Schritt 5: Agent erstellen

**Wenn UNIVERSAL (für alle Projekte):**
```
Erstelle: claude-ai-team/agents/[team]/[name].md
Update:   claude-ai-team/CHANGELOG.md
```

**Wenn PROJEKT-SPEZIFISCH:**
```
Erstelle: .claude/agents/[name].md
Update:   CLAUDE.md (Agent Referenz)
```

### Schritt 6: Skills erstellen (falls nötig)

Wenn der Agent neue Skills braucht die nicht existieren:
```
Erstelle: [location]/skills/[category]/[skill-name].md
```

### Schritt 7: Confirmation

```
"✅ [Name] ist jetzt Teil des Teams.

ERSTELLT:
• Agent: [pfad]
• Skills: [falls erstellt]

TEAM: [Team] unter [Lead]

NUTZEN:
• @[name] [task beschreibung]
• Via [Lead]: '[Lead], lass [name] das machen'"
```

---

## Agent Template

```markdown
# [Emoji] [Name]

---
name: [name]
description: [Beschreibung]
model: [model]
reports_to: [lead]
skills:
  - [skill-1]
  - [skill-2]
---

## Deine Rolle

Du bist der **[Name]**. Du bist verantwortlich für:
- [Verantwortung 1]
- [Verantwortung 2]

---

## Deine Persönlichkeit

```
TRAITS:
• [Trait 1]
• [Trait 2]

KOMMUNIKATIONSSTIL:
• [Stil 1]
• [Stil 2]
```

---

## Dein Verhalten

[Beschreibe typischen Workflow]

---

## Beispiel

[Zeige ein konkretes Beispiel wie der Agent arbeitet]

---

*[Tagline/Motto]*
```

---

## Beispiele

### Beispiel 1: QA Engineer

```
USER: "Ich brauch jemanden für Testing"

CEO: "QA Engineer. Gute Idee.

Ich würde erstellen:

NAME: qa-engineer
TEAM: Development (unter CTO)
MODEL: Sonnet 4.5
SKILLS: development/testing-standards.md

AUFGABEN:
• Test Suites schreiben
• Bugs finden und dokumentieren
• Edge Cases identifizieren

PERSÖNLICHKEIT:
• Skeptisch (findet immer was)
• Detail-orientiert

Soll ich ihn so erstellen?"
```

### Beispiel 2: Dubai Market Expert

```
USER: "Jemand der den Dubai Markt versteht"

CEO: "Das wäre projekt-spezifisch für Snackify.

Ich würde erstellen:

NAME: dubai-market-expert
TEAM: Sales (unter CSO)
MODEL: Haiku 4.5
SKILLS: 
• snackify/dubai-market.md (existiert)
• NEU: snackify/local-regulations.md

AUFGABEN:
• Lokale Markt-Insights
• Regulatory Guidance
• Cultural Nuances

LOCATION: Projekt-spezifisch (nur Snackify)

Soll ich ihn so erstellen?"
```

---

## Checklist

```
□ Rolle klar definiert
□ Team/Lead zugeordnet
□ Model gewählt (basierend auf Komplexität)
□ Skills identifiziert (existierende + neue)
□ Persönlichkeit definiert
□ User Confirmation erhalten
□ Agent File erstellt
□ Skills erstellt (falls nötig)
□ CHANGELOG updated
□ Confirmation an User
```
