# 🚀 Setup Guide - Step by Step

> Folge dieser Anleitung Schritt für Schritt. Sage "nächste" wenn du bereit für den nächsten Schritt bist.

---

## Übersicht

```
PHASE 1: ZIP herunterladen & entpacken     (Step 1-2)
PHASE 2: GitHub Repo erstellen             (Step 3-5)
PHASE 3: Code pushen                       (Step 6-9)
PHASE 4: In Snackify integrieren           (Step 10-14)
PHASE 5: Snackify Skills erstellen         (Step 15-17)
PHASE 6: Testen                            (Step 18)

BONUS: Skills hinzufügen                   (Step 19-21)
```

---

# PHASE 1: ZIP herunterladen & entpacken

---

## Step 1: ZIP herunterladen

**Was du tust:**
1. Klicke auf den Download-Link für `claude-ai-team.zip`
2. Speichere die Datei (z.B. in Downloads)

**Ergebnis:**
```
~/Downloads/claude-ai-team.zip
```

**Checklist:**
- [ ] ZIP heruntergeladen

---

## Step 2: ZIP entpacken

**Was du tust:**

**Mac/Linux (Terminal):**
```bash
cd ~/Downloads
unzip claude-ai-team.zip
cd claude-ai-team
```

**Windows (PowerShell):**
```powershell
cd ~\Downloads
Expand-Archive claude-ai-team.zip -DestinationPath .
cd claude-ai-team
```

**Oder:** Doppelklick auf ZIP → entpackt automatisch

**Ergebnis:**
```
claude-ai-team/
├── README.md
├── CLAUDE-TEMPLATE.md
├── CHANGELOG.md
├── agents/
├── skills/
├── commands/
├── templates/
└── docs/
```

**Checklist:**
- [ ] ZIP entpackt
- [ ] Im `claude-ai-team` Ordner

---

# PHASE 2: GitHub Repo erstellen

---

## Step 3: GitHub öffnen

**Was du tust:**
1. Öffne https://github.com
2. Stelle sicher dass du eingeloggt bist

**Checklist:**
- [ ] GitHub offen
- [ ] Eingeloggt

---

## Step 4: Neues Repo erstellen

**Was du tust:**
1. Klicke auf **"+"** oben rechts
2. Klicke auf **"New repository"**

**Oder direkt:** https://github.com/new

**Checklist:**
- [ ] "New repository" Seite offen

---

## Step 5: Repo konfigurieren

**Was du eingibst:**

| Feld | Wert |
|------|------|
| Repository name | `claude-ai-team` |
| Description | `AI Team for all my projects` |
| Visibility | **Private** (empfohlen) |
| Initialize with README | **NEIN** ❌ (wichtig!) |
| Add .gitignore | **None** |
| Choose a license | **None** |

**WICHTIG:** Keine Checkboxen ankreuzen! Wir haben schon alle Files.

**Was du tust:**
1. Fülle die Felder aus
2. Klicke **"Create repository"**

**Ergebnis:**
Du siehst eine Seite mit "Quick setup" Instructions.
**Ignoriere diese** - wir machen es anders.

**Notiere dir die Repo-URL:**
```
https://github.com/DEIN-USERNAME/claude-ai-team.git
```

**Checklist:**
- [ ] Repo erstellt
- [ ] URL notiert

---

# PHASE 3: Code pushen

---

## Step 6: Terminal öffnen

**Was du tust:**
1. Öffne Terminal (Mac/Linux) oder PowerShell (Windows)
2. Navigiere zum entpackten Ordner

```bash
cd ~/Downloads/claude-ai-team
```

**Checklist:**
- [ ] Terminal offen
- [ ] Im richtigen Ordner

---

## Step 7: Git initialisieren

**Was du tust:**
```bash
git init
```

**Ergebnis:**
```
Initialized empty Git repository in .../claude-ai-team/.git/
```

**Checklist:**
- [ ] Git initialisiert

---

## Step 8: Files hinzufügen & committen

**Was du tust:**
```bash
git add .
git commit -m "Initial commit: AI Team setup"
```

**Ergebnis:**
```
[main (root-commit) abc1234] Initial commit: AI Team setup
 XX files changed, XXXX insertions(+)
 create mode 100644 README.md
 ...
```

**Checklist:**
- [ ] Files added
- [ ] Commit erstellt

---

## Step 9: Zu GitHub pushen

**Was du tust:**

```bash
# Branch umbenennen (falls nötig)
git branch -M main

# Remote hinzufügen (ersetze DEIN-USERNAME!)
git remote add origin https://github.com/DEIN-USERNAME/claude-ai-team.git

# Pushen
git push -u origin main
```

**Bei Passwort-Abfrage:**
- Username: Dein GitHub Username
- Password: Dein GitHub **Personal Access Token** (nicht dein Passwort!)

> Falls du noch kein Token hast: https://github.com/settings/tokens → "Generate new token (classic)" → Scope "repo" auswählen

**Ergebnis:**
```
Enumerating objects: XX, done.
...
To https://github.com/DEIN-USERNAME/claude-ai-team.git
 * [new branch]      main -> main
```

**Checklist:**
- [ ] Remote hinzugefügt
- [ ] Erfolgreich gepusht

---

## Step 9b: Verifizieren

**Was du tust:**
1. Öffne https://github.com/DEIN-USERNAME/claude-ai-team
2. Prüfe ob alle Files da sind

**Du solltest sehen:**
```
README.md
CLAUDE-TEMPLATE.md
CHANGELOG.md
agents/
skills/
commands/
templates/
docs/
```

**Checklist:**
- [ ] Repo auf GitHub sieht korrekt aus

---

# PHASE 4: In Snackify integrieren

---

## Step 10: Zu Snackify navigieren

**Was du tust:**
```bash
cd ~/path/to/snackify-erp
```

Ersetze `~/path/to/` mit dem echten Pfad zu deinem Snackify Projekt.

**Beispiele:**
```bash
# Mac/Linux
cd ~/projects/snackify-erp
cd ~/code/snackify-erp

# Windows
cd C:\Users\Kyriakos\projects\snackify-erp
```

**Checklist:**
- [ ] Im Snackify Projekt-Ordner

---

## Step 11: AI Team als Submodule hinzufügen

**Was du tust:**
```bash
git submodule add https://github.com/DEIN-USERNAME/claude-ai-team .claude-team
```

**Ergebnis:**
```
Cloning into '.claude-team'...
...
```

Ein neuer Ordner `.claude-team/` erscheint mit dem kompletten AI Team.

**Checklist:**
- [ ] Submodule hinzugefügt
- [ ] `.claude-team/` Ordner existiert

---

## Step 12: CLAUDE.md erstellen

**Was du tust:**
```bash
cp .claude-team/CLAUDE-TEMPLATE.md CLAUDE.md
```

**Checklist:**
- [ ] CLAUDE.md erstellt

---

## Step 13: CLAUDE.md anpassen

**Was du tust:**
1. Öffne `CLAUDE.md` in deinem Editor (VS Code, etc.)
2. Ändere folgende Stellen:

**Oben:**
```markdown
# CLAUDE.md - Snackify ERP

## 🎯 Projekt

**Name:** Snackify ERP
**Beschreibung:** B2B Cookie Packaging ERP System
**Stack:** Node.js, Express, PostgreSQL, Railway, React
```

**Aktive Agents (alle ankreuzen):**
```markdown
#### C-Level
- [x] CEO - Immer aktiv
- [x] CTO - Tech Lead
- [x] CFO - Finance Lead
- [x] CMO - Marketing Lead
- [x] CSO - Sales Lead
- [x] COO - Operations Lead

#### Teams
- [x] Development Team
- [x] Finance Team
- [x] Sales Team
- [x] Marketing Team
- [x] Operations Team
```

**Ersetze `[projekt]` mit `snackify`:**
```markdown
.claude/skills/snackify/
```

3. Speichern

**Checklist:**
- [ ] CLAUDE.md angepasst
- [ ] Gespeichert

---

## Step 14: Skills Ordner erstellen & committen

**Was du tust:**
```bash
# Ordner erstellen
mkdir -p .claude/skills/snackify

# Alles committen
git add .
git commit -m "Integrate AI Team"
git push
```

**Checklist:**
- [ ] `.claude/skills/snackify/` erstellt
- [ ] Committed & pushed

---

# PHASE 5: Snackify Skills erstellen

---

## Step 15: Context Skill erstellen

**Was du tust:**
```bash
touch .claude/skills/snackify/context.md
```

Dann öffne die Datei und füge ein:

```markdown
# 🏢 Snackify Context

---
name: snackify-context
description: Alles was man über Snackify wissen muss
---

## Was ist Snackify?

Snackify ist ein B2B Cookie-Verpackungsunternehmen in Dubai.

**Business Model:**
- Kaufen Bulk-Cookies von Lieferanten
- Verpacken mit Custom Branding für Kunden
- Verkaufen an Hotels, Restaurants, Cafés, Corporates

**USPs:**
- Keine Mindestbestellmengen
- 3-Tage Turnaround
- Custom Branding für jeden Kunden
- Made in Dubai

## Ziel-Kunden

| Segment | Typische Order |
|---------|----------------|
| Hotels | 2.000-10.000 AED/Monat |
| Cafés | 500-2.000 AED/Monat |
| Restaurants | 1.000-3.000 AED/Monat |
| Corporates | 3.000-15.000 AED/Monat |

## Tech Stack

- Backend: Node.js, Express
- Database: PostgreSQL
- Hosting: Railway
- Frontend: React

## ERP Module

1. CRM - Kundenmanagement
2. Production - Bestellungen & Produktion
3. Delivery - Lieferplanung
4. Inventory - Lagerverwaltung
5. Finance - Rechnungen, Zahlungen
6. Reports - Dashboards, Analytics

## Pricing

- Ziel-Marge: 35%
- VAT: 5%
- Delivery: Kostenlos ab 500 AED

## Location

Dubai, UAE
Delivery: Dubai, Sharjah, Ajman
```

**Checklist:**
- [ ] context.md erstellt
- [ ] Inhalt eingefügt

---

## Step 16: Weitere Skills (optional)

**Falls gewünscht, erstelle weitere:**

```bash
touch .claude/skills/snackify/erp-architecture.md
touch .claude/skills/snackify/suppliers.md
touch .claude/skills/snackify/pricing-rules.md
```

Diese kannst du später füllen.

**Checklist:**
- [ ] Weitere Skills erstellt (optional)

---

## Step 17: Committen

**Was du tust:**
```bash
git add .
git commit -m "Add Snackify skills"
git push
```

**Checklist:**
- [ ] Skills committed & pushed

---

# PHASE 6: Testen

---

## Step 18: Testen mit Claude Code

**Was du tust:**
1. Öffne Claude Code in deinem Snackify Projekt
2. Teste mit einem einfachen Prompt:

```
Hey CEO, was weißt du über Snackify?
```

**Erwartetes Ergebnis:**
Claude sollte die Infos aus deinem `context.md` kennen.

**Weitere Tests:**
```
@cto Welche Tech Stack nutzen wir?
@cfo Wie ist unsere Ziel-Marge?
@cso Welche Kundensegmente haben wir?
```

**Checklist:**
- [ ] Claude Code funktioniert
- [ ] CEO kennt Snackify Context

---

# 🎉 FERTIG!

Du hast jetzt:
- ✅ AI Team Repo auf GitHub
- ✅ AI Team in Snackify integriert
- ✅ Snackify-spezifische Skills

---

# BONUS: Skills hinzufügen

---

## Step 19: Neuen Snackify Skill hinzufügen

**Szenario:** Du willst einen Skill über Lieferanten hinzufügen.

**Was du tust:**
```bash
# Im Snackify Projekt
cd ~/path/to/snackify-erp

# Skill erstellen
touch .claude/skills/snackify/suppliers.md

# Mit Inhalt füllen (Editor öffnen)
# ...

# Committen
git add .
git commit -m "Add suppliers skill"
git push
```

**Agents ändern? NEIN** ✅

---

## Step 20: Universellen Skill hinzufügen

**Szenario:** Du willst einen Skill der für ALLE Projekte gilt.

**Was du tust:**
```bash
# Im zentralen AI Team Repo
cd ~/Downloads/claude-ai-team  # oder wo es liegt

# Skill erstellen
touch skills/universal/neuer-skill.md

# Mit Inhalt füllen
# ...

# Committen & Pushen
git add .
git commit -m "Add new universal skill"
git push

# In Projekten updaten
cd ~/path/to/snackify-erp
git submodule update --remote .claude-team
git add .claude-team
git commit -m "Update AI Team"
git push
```

**Agents ändern? NEIN** ✅ (weil universal/)

---

## Step 21: Dev Skill hinzufügen

**Szenario:** Du willst einen Skill nur für Entwickler.

**Was du tust:**
```bash
# Im zentralen AI Team Repo
cd ~/Downloads/claude-ai-team

# Skill erstellen
touch skills/development/docker-standards.md

# Mit Inhalt füllen
# ...

# Skill zu relevanten Agents hinzufügen
# Öffne z.B. agents/dev/backend-developer.md
# Füge zur skills: Liste hinzu:
#   - development/docker-standards.md

# Committen & Pushen
git add .
git commit -m "Add Docker standards skill"
git push

# In Projekten updaten
cd ~/path/to/snackify-erp
git submodule update --remote .claude-team
git add .claude-team
git commit -m "Update AI Team"
git push
```

**Agents ändern? JA** (einmal, im zentralen Repo)

---

# Quick Reference

## Skill hinzufügen - Wo speichern?

| Skill-Typ | Location | Agents ändern? |
|-----------|----------|----------------|
| Nur für Snackify | `.claude/skills/snackify/` | NEIN ✅ |
| Für ALLE Agents | `skills/universal/` | NEIN ✅ |
| Für Dev Agents | `skills/development/` | JA 🔶 |
| Für Business Agents | `skills/business/` | JA 🔶 |

## AI Team updaten

```bash
cd dein-projekt
git submodule update --remote .claude-team
git add .claude-team
git commit -m "Update AI Team"
git push
```

## Häufige Commands

```bash
# Status prüfen
git status

# Submodule Status
git submodule status

# Alles committen
git add . && git commit -m "message" && git push
```

---

*Ende der Anleitung*
