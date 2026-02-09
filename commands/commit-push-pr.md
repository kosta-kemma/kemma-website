# 🚀 /commit-push-pr

---
name: commit-push-pr
description: Git Workflow - Commit, Push und PR erstellen
---

## Was dieser Command macht

Automatisiert den kompletten Git Workflow:
1. Status prüfen
2. Changes committen
3. Pushen
4. PR erstellen (wenn gewünscht)

---

## Ablauf

### Step 1: Status Check
```bash
git status
git diff --stat
```

### Step 2: Commit Message generieren
```
Format: [type]: [short description]

Types:
- feat: Neues Feature
- fix: Bug Fix
- docs: Dokumentation
- style: Formatting
- refactor: Code Refactoring
- test: Tests
- chore: Maintenance

Beispiele:
- feat: Add order tracking endpoint
- fix: Resolve login timeout issue
- docs: Update API documentation
```

### Step 3: Commit & Push
```bash
git add .
git commit -m "[generated message]"
git push origin [branch]
```

### Step 4: PR erstellen (optional)
```markdown
## PR Title
[type]: [Short description]

## Description
[Was wurde gemacht und warum]

## Changes
- [Change 1]
- [Change 2]

## Testing
- [ ] Unit Tests passing
- [ ] Manual Testing done

## Checklist
- [ ] Code follows style guide
- [ ] Documentation updated
- [ ] No console.logs left
```

---

## Nutzung

```
/commit-push-pr
/commit-push-pr "feat: Add new dashboard"
/commit-push-pr --no-pr
```

---

*Konsistente Commits = Saubere History.*
