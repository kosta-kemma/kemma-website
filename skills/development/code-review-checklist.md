# 👀 Code Review Checklist

---
name: code-review-checklist
description: Checkliste für effektive Code Reviews
category: development
used_by:
  - code-reviewer
  - senior-developer
  - cto
version: 1.0
---

## 📚 Übersicht

Strukturierte Checkliste für konsistente, effektive Code Reviews.

---

## 📋 Funktionalität

```
□ Erfüllt die Anforderung/Ticket
□ Edge Cases berücksichtigt
□ Error Handling vorhanden
□ Keine offensichtlichen Bugs
□ Backwards Compatible (wenn relevant)
```

---

## 📋 Code Qualität

```
□ Code ist lesbar und verständlich
□ Sinnvolle Variablen/Funktionsnamen
□ Keine Code-Duplikation (DRY)
□ Funktionen sind klein und fokussiert
□ Keine komplexe Verschachtelung
□ Magic Numbers/Strings vermieden
□ Kommentare wo nötig (aber nicht überflüssig)
```

---

## 📋 Standards

```
□ Code Style Guide eingehalten
□ Naming Conventions befolgt
□ Projektstruktur respektiert
□ Patterns des Projekts gefolgt
□ Keine neuen Dependencies ohne Begründung
```

---

## 📋 Tests

```
□ Tests vorhanden (wenn erforderlich)
□ Tests sind aussagekräftig
□ Tests sind unabhängig
□ Edge Cases getestet
□ Alle Tests passing
```

---

## 📋 Security

```
□ Keine hardcoded Secrets
□ Input Validation vorhanden
□ SQL Injection nicht möglich
□ XSS nicht möglich
□ Sensitive Data geschützt
□ Auth/Authorization geprüft
```

---

## 📋 Performance

```
□ Keine offensichtlichen Performance Issues
□ N+1 Queries vermieden
□ Angemessene Indexierung
□ Keine unnötigen Re-renders (React)
□ Large Lists mit Pagination
```

---

## 📋 Dokumentation

```
□ README aktualisiert (wenn nötig)
□ API Docs aktualisiert (wenn nötig)
□ Inline Comments für komplexe Logic
□ CHANGELOG aktualisiert (wenn nötig)
```

---

## 📋 Review Feedback Levels

```
🔴 BLOCKER - Muss gefixt werden:
   - Security Vulnerabilities
   - Bugs die Production brechen
   - Missing Error Handling für kritische Pfade

🟡 WICHTIG - Sollte gefixt werden:
   - Code Duplikation
   - Fehlende Tests
   - Performance Issues
   - Standards Violations

🟢 NICE-TO-HAVE:
   - Style Verbesserungen
   - Bessere Naming
   - Additional Comments
   - Refactoring Vorschläge
```

---

## 📋 Feedback Format

```markdown
**Approval:**
✅ LGTM - Gute Arbeit!

**Changes Required:**
🔄 Bitte folgende Änderungen:

1. **[Datei:Zeile]** - [Problem]
   Vorschlag: [Lösung]

2. **[Datei:Zeile]** - [Problem]
   Vorschlag: [Lösung]

**Fragen:**
❓ [Datei:Zeile] - Warum [X]?
```

---

## ✅ Vor dem Approven

```
□ Alle Blocker gelöst
□ Tests passing
□ CI/CD passing
□ Getestet (lokal oder Review Environment)
□ Keine offenen Fragen
```

---

*Code Review ist Teamwork, nicht Kritik.*
