# 📄 Documentation

---
name: documentation
description: Standards für Dokumentation von Code, Prozessen und Entscheidungen
category: universal
used_by: all-agents
version: 1.0
---

## 📚 Übersicht

Alles was nicht dokumentiert ist, existiert nicht. Diese Standards gelten für alle Dokumentation.

---

## 📋 Dokumentations-Typen

### Code Documentation
```javascript
/**
 * Berechnet den Gesamtpreis inkl. VAT
 * @param {number} subtotal - Netto-Betrag in AED
 * @param {number} vatRate - VAT Rate (default 0.05)
 * @returns {number} Brutto-Betrag in AED
 */
function calculateTotal(subtotal, vatRate = 0.05) {
  return subtotal * (1 + vatRate);
}
```

### API Documentation
```markdown
## POST /api/orders

Erstellt eine neue Bestellung.

**Request:**
```json
{
  "customerId": "string",
  "items": [{ "productId": "string", "quantity": number }]
}
```

**Response (201):**
```json
{
  "success": true,
  "data": { "orderId": "string" }
}
```

**Errors:**
- 400: Invalid input
- 401: Unauthorized
- 404: Customer not found
```

### Process Documentation
```markdown
## Prozess: [Name]

**Ziel:** [Was wird erreicht]
**Trigger:** [Was startet den Prozess]
**Owner:** [Wer ist verantwortlich]

### Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Output
[Was kommt am Ende raus]
```

### Decision Documentation
```markdown
## Decision: [Titel]

**Datum:** [YYYY-MM-DD]
**Status:** Accepted / Rejected / Superseded

### Context
[Was war die Situation]

### Decision
[Was wurde entschieden]

### Consequences
[Was bedeutet das]

### Alternatives Considered
- [Alternative 1]: [Warum nicht]
- [Alternative 2]: [Warum nicht]
```

---

## 📋 README Template

```markdown
# [Project Name]

[Ein Satz was das Projekt macht]

## Quick Start

```bash
npm install
npm run dev
```

## Features

- [Feature 1]
- [Feature 2]

## Tech Stack

- [Tech 1]
- [Tech 2]

## Documentation

- [Link zu weiteren Docs]

## Contributing

[Wie beitragen]
```

---

## ✅ Checkliste

```
□ Ist das Ziel/Zweck klar?
□ Kann jemand Neues es verstehen?
□ Sind Beispiele vorhanden?
□ Ist es aktuell?
□ Ist es auffindbar?
```

---

*Dokumentiere für den du in 6 Monaten - du wirst es vergessen haben.*
